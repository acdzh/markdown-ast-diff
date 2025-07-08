import type { Code, Heading, HTML, Image, InlineCode, Link, LinkReference, List, ListItem, Table, Text } from 'mdast';
import type { Node } from 'unist';
import { StringSHA1 } from '../lib/hash';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';
import { NodeType } from '../types/base';
import { isOpaque } from '../utils/node';

/*
 * Assign signatures and weights.
 * This is defined by "Phase 2" in sec. 5.2., along with the specific
 * heuristics given in the "Tuning" section.
 * We use the MD5 algorithm for computing hashes.
 * Returns the weight of the node rooted at "n".
 * If "parent" is not NULL, its hash is updated with the hash computed
 * for the current "n" and its children.
 * Return <0 on failure.
 */
export function assignSigns(parentHashContext: HashContext | null, map: XMap, node: Node, ignore: boolean = false): number {
  let weight = -1;
  let v = 0; // weight

  let ignoreChild = ignore;
  /* 
   * Get our node slot unless we're ignoring the node.
   * Ignoring comes when a parent in our chain is opaque.
   */
  if (!ignore) {
    map.setXNode(node._id!, new XNode(node));
    ignoreChild = isOpaque(node);
  }

  /* Recursive step. */

  const hashContext = new HashContext(node.type);
  node.children?.forEach((child) => {
    v += assignSigns(hashContext, map, child, ignoreChild);
  });

  /* Re-assign "xn": child might have reallocated. */

  const xNode = ignore ? new XNode() : node._xNode!;
  xNode.weight = v;

  /*
   * Compute our weight.
   * The weight is either the log of the contained text length for
   * leaf nodes or the accumulated sub-element weight for
   * non-terminal nodes plus one.
   */

  switch (node.type) {
    case NodeType.Code:
      weight = (node as Code).value.length;
      break;
    case NodeType.Html:
      weight = (node as HTML).value.length;
      break;
    case NodeType.Link:
      weight = (node as Link).url.length + ((node as Link).title?.length ?? 0);
      break;
    case NodeType.InlineCode:
      weight = (node as InlineCode).value.length;
      break;
    case NodeType.Image:
      weight = (node as Image).url.length +
      ((node as Image).title?.length ?? 0) +
      ((node as Image).alt?.length ?? 0);
      break;
    case NodeType.Text:
      weight = (node as Text).value.length;
      // weight = new TextEncoder().encode((node as Text).value).length;
      break;
    case NodeType.LinkReference:
      weight = (node as LinkReference).label?.length ?? 0;
      break;
    default:
      break;
  }

  /* Weight can be zero if text size is zero. */
  if (weight >= 0) {
    xNode.weight = 1 + (weight === 0 ? 0 : Math.log(weight));
  } else {
    xNode.weight += 1;
  }

  /*
	 * Augment our signature from our attributes.
	 * This depends upon the node.
	 * Avoid using attributes that are "mutable" relative to the
	 * generated output, e.g., list display numbers.
	 */
  switch (node.type) {
    case NodeType.List:
      hashContext.update((node as List).ordered);
      hashContext.update((node as List).start);
      hashContext.update((node as List).spread);
      break;
    case NodeType.ListItem:
      hashContext.update((node as ListItem).checked);
      hashContext.update((node as ListItem).spread);
      break;
    case NodeType.Heading:
      hashContext.update((node as Heading).depth);
      break;
    case NodeType.Text:
      hashContext.update((node as Text).value);
      break;
    case NodeType.Html:
      hashContext.update((node as HTML).value);
      break;
    case NodeType.Link:
      hashContext.update((node as Link).url);
      hashContext.update((node as Link).title);
      break;
    case NodeType.Code:
      hashContext.update((node as Code).value);
      hashContext.update((node as Code).lang);
      break;
    case NodeType.InlineCode:
      hashContext.update((node as InlineCode).value);
      break;
    case NodeType.Table:
      hashContext.update((node as Table).align);
      break;
    case NodeType.Image:
      hashContext.update((node as Image).url);
      hashContext.update((node as Image).title);
      hashContext.update((node as Image).alt);
      break;
    default:
      // console.warn(`[markdown-ast-diff] assignSigns (calc hash): unhandled node type ${node.type}`);
      break;
  }

  xNode.sign = hashContext.digest();

  if (parentHashContext) {
    parentHashContext.update(xNode.sign);
  }

  if (xNode.weight > map.maxWeight) {
    map.maxWeight = xNode.weight;
  }

  return xNode.weight;
}

class DebugSha {
  private content: string = '';

  update(i: string) {
    this.content += i;
  }

  digest() {
    return this.content;
  }
}

/**
 * HashContext class for calculating hash values of content
 * Supports string, number, boolean, null, undefined and array types
 */
class HashContext {
  private sha: DebugSha = new DebugSha();
  // private sha: StringSHA1 = new StringSHA1();

  /**
   * Creates a new HashContext instance
   * @param content Initial content
   */
  constructor(content: string = '') {
    if (content) {
      this.sha.update(content);
    }
  }

  /**
   * Updates the content for hash calculation
   * @param content Content to add to the hash calculation
   */
  update(content?: string | number | boolean | null | Array<string | number | boolean | null>): void {
    // Add separator to avoid hash collisions between different content types
    this.sha.update('|');
    
    if (content === undefined) {
      this.sha.update('$$undefined$$');
    } else if (content === null) {
      this.sha.update('$$null$$');
    } else if (typeof content === 'string') {
      this.sha.update(content);
    } else if (typeof content === 'number') {
      // Use fixed format to convert numbers to avoid precision issues
      this.sha.update(content.toString());
    } else if (typeof content === 'boolean') {
      this.sha.update(content ? '$$true$$' : '$$false$$');
    } else if (Array.isArray(content)) {
      this.sha.update('[');
      // Use for loop instead of forEach for better performance
      for (let i = 0; i < content.length; i++) {
        this.update(content[i]);
      }
      // Fix bracket closing error, should be ']' not '['
      this.sha.update(']');
    }
  }

  /**
   * Gets the calculated hash value
   * @returns SHA-1 hash value in hexadecimal format
   */
  digest(): string {
    return this.sha.digest();
  }
}
