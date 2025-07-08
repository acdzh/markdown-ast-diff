/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
export function isHighSurrogate(charCode: number): boolean {
	return (0xD800 <= charCode && charCode <= 0xDBFF);
}

/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
export function isLowSurrogate(charCode: number): boolean {
	return (0xDC00 <= charCode && charCode <= 0xDFFF);
}

/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
export function computeCodePoint(highSurrogate: number, lowSurrogate: number): number {
	return ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00) + 0x10000;
}

const DEFAULT_RANDOM_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const DEFAULT_RANDOM_CHARSET_LENGTH = DEFAULT_RANDOM_CHARSET.length;

export function random(length: number): string {  
  let result = '';

  const randomValues = new Uint8Array(length);
  
  for (let i = 0; i < length; i++) {
    randomValues[i] = Math.floor(Math.random() * 256);
  }

  for (let i = 0; i < length; i++) {
    result += DEFAULT_RANDOM_CHARSET.charAt(randomValues[i] % DEFAULT_RANDOM_CHARSET_LENGTH);
  }
  
  return result;
}


/**
 * Calculate Levenshtein distance (edit distance)
 * Measures the minimum number of edit operations (insertion, deletion, substitution) between two strings
 * @param str1 First string
 * @param str2 Second string
 * @returns Edit distance
 */
function levenshteinDistance(str1: string, str2: string): number {
  // Early return for empty strings
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  
  const m = str1.length;
  const n = str2.length;

  // Create distance matrix - only need two rows for optimization
  const prevRow = new Array(n + 1);
  const currRow = new Array(n + 1);

  // Initialize the first row
  for (let j = 0; j <= n; j++) {
    prevRow[j] = j;
  }

  // Fill the matrix using only two rows
  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    
    for (let j = 1; j <= n; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,      // Deletion
        currRow[j - 1] + 1,  // Insertion
        prevRow[j - 1] + cost // Substitution
      );
    }
    
    // Swap rows for next iteration
    for (let j = 0; j <= n; j++) {
      prevRow[j] = currRow[j];
    }
  }

  return prevRow[n];
}

/**
 * Calculate Levenshtein similarity
 * Converts edit distance to a similarity value between 0-1, where 1 means identical and 0 means completely different
 * @param str1 First string
 * @param str2 Second string
 * @returns Similarity value (between 0-1)
 */
function levenshteinSimilarity(str1: string, str2: string): number {
  // Two empty strings are considered identical
  if (str1.length === 0 && str2.length === 0) return 1;
  
  // If one string is empty and the other isn't, calculate similarity based on length
  if (str1.length === 0) return 0;
  if (str2.length === 0) return 0;
  
  // Calculate distance and normalize to a similarity score
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - distance / maxLength;
}

/**
 * String similarity calculation - Optimized for Markdown heading matching
 * Uses Levenshtein similarity algorithm to calculate the similarity between two strings
 * with additional normalization for better heading matching
 * 
 * @param str1 First string
 * @param str2 Second string
 * @returns Similarity value (between 0-1)
 */
export function similarity(str1: string, str2: string): number {
  // Quick equality check for performance
  if (str1 === str2) return 1;
  
  // Normalize strings by trimming whitespace and converting to lowercase
  // This improves matching for headings that might differ only in case or spacing
  const normalizedStr1 = str1.trim().toLowerCase();
  const normalizedStr2 = str2.trim().toLowerCase();
  
  // Check again after normalization
  if (normalizedStr1 === normalizedStr2) return 1;
  
  // Use Levenshtein similarity for the actual comparison
  return levenshteinSimilarity(normalizedStr1, normalizedStr2);
}
