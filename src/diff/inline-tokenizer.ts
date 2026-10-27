import type { Node } from 'unist';
import type { Text } from 'mdast';
import { NodeType } from '../types/base';
import { CONSTANTS } from './constants';

const CJK_REGEX = /[㐀-䶿一-鿿豈-﫿]/;
const SPLIT_REGEX = /(\s+|[.,!?;:()[\]{}<>"'`~@#$%^&*_+=/\\|\-])/;

export interface TokenTable {
  tokens: string[];
  tokenToCode: Map<string, string>;
  codeToToken: Map<string, string>;
}

const tokenCache = new Map<string, string[]>();

export function tokenizeText(text: string): string[] {
  const cached = tokenCache.get(text);
  if (cached) {
    return cached;
  }

  const result: string[] = [];
  const rawParts = text.split(SPLIT_REGEX);

  for (const part of rawParts) {
    if (!part) {
      continue;
    }
    let hasCJK = false;
    for (let i = 0; i < part.length; i++) {
      if (CJK_REGEX.test(part[i])) {
        hasCJK = true;
        break;
      }
    }
    if (hasCJK) {
      for (const ch of part) {
        result.push(ch);
      }
    } else {
      result.push(part);
    }
  }

  if (tokenCache.size >= CONSTANTS.INLINE_TOKEN_CACHE_LIMIT) {
    const firstKey = tokenCache.keys().next().value;
    if (firstKey !== undefined) {
      tokenCache.delete(firstKey);
    }
  }
  tokenCache.set(text, result);

  return result;
}

export function buildInlineSignature(node: Node): string {
  const parts: string[] = [node.type];
  if ((node as any).value !== undefined) {
    parts.push((node as any).value);
  }
  if ((node as any).url !== undefined) {
    parts.push((node as any).url);
  }
  if ((node as any).title !== undefined) {
    parts.push(String((node as any).title));
  }
  if ((node as any).alt !== undefined) {
    parts.push(String((node as any).alt));
  }
  if ((node as any).identifier !== undefined) {
    parts.push(String((node as any).identifier));
  }
  if ((node as any).label !== undefined) {
    parts.push(String((node as any).label));
  }
  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      parts.push(buildInlineSignature(child));
    }
  }
  return parts.join('\x00');
}

export interface PlaceholderMap {
  sigToPlaceholder: Map<string, string>;
  placeholderToNode: Map<string, Node>;
  nextCode: number;
}

export function createPlaceholderMap(): PlaceholderMap {
  return {
    sigToPlaceholder: new Map(),
    placeholderToNode: new Map(),
    nextCode: CONSTANTS.INLINE_PLACEHOLDER_BASE,
  };
}

export function getOrCreatePlaceholder(pmap: PlaceholderMap, node: Node): string {
  const sig = buildInlineSignature(node);
  const existing = pmap.sigToPlaceholder.get(sig);
  if (existing) {
    return existing;
  }
  const placeholder = String.fromCodePoint(pmap.nextCode++);
  pmap.sigToPlaceholder.set(sig, placeholder);
  pmap.placeholderToNode.set(placeholder, node);
  return placeholder;
}

export function tokenizeInlineChildren(children: Node[], pmap: PlaceholderMap): string[] {
  const tokens: string[] = [];
  for (const child of children) {
    if (child.type === NodeType.Text) {
      tokens.push(...tokenizeText((child as Text).value));
    } else {
      tokens.push(getOrCreatePlaceholder(pmap, child));
    }
  }
  return tokens;
}

export function buildTokenTable(oldTokens: string[], newTokens: string[]): TokenTable {
  const tokenSet = new Set<string>();
  for (const t of oldTokens) {
    tokenSet.add(t);
  }
  for (const t of newTokens) {
    tokenSet.add(t);
  }

  const tokens: string[] = [];
  const tokenToCode = new Map<string, string>();
  const codeToToken = new Map<string, string>();
  let code = CONSTANTS.INLINE_WORD_TOKEN_BASE;

  for (const token of tokenSet) {
    if (code > CONSTANTS.INLINE_WORD_TOKEN_MAX) {
      break;
    }
    const ch = String.fromCodePoint(code++);
    tokens.push(token);
    tokenToCode.set(token, ch);
    codeToToken.set(ch, token);
  }

  return { tokens, tokenToCode, codeToToken };
}

export function encodeTokens(tokens: string[], table: TokenTable): string {
  let result = '';
  for (const token of tokens) {
    const code = table.tokenToCode.get(token);
    if (code) {
      result += code;
    }
  }
  return result;
}

export function decodeTokens(encoded: string, table: TokenTable): string[] {
  const result: string[] = [];
  for (const ch of encoded) {
    const token = table.codeToToken.get(ch);
    if (token) {
      result.push(token);
    }
  }
  return result;
}

export function trimSharedTokenEdges(
  oldTokens: string[],
  newTokens: string[]
): {
  sharedPrefix: string[];
  sharedSuffix: string[];
  oldMiddle: string[];
  newMiddle: string[];
} {
  let prefixLen = 0;
  const minLen = Math.min(oldTokens.length, newTokens.length);
  while (prefixLen < minLen && oldTokens[prefixLen] === newTokens[prefixLen]) {
    prefixLen++;
  }

  let suffixLen = 0;
  while (
    suffixLen < minLen - prefixLen &&
    oldTokens[oldTokens.length - 1 - suffixLen] === newTokens[newTokens.length - 1 - suffixLen]
  ) {
    suffixLen++;
  }

  return {
    sharedPrefix: oldTokens.slice(0, prefixLen),
    sharedSuffix: suffixLen > 0 ? oldTokens.slice(oldTokens.length - suffixLen) : [],
    oldMiddle: oldTokens.slice(prefixLen, oldTokens.length - suffixLen),
    newMiddle: newTokens.slice(prefixLen, newTokens.length - suffixLen),
  };
}
