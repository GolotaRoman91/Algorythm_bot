export function findFirstUniqueLetter(word) {
  const charCount = {};

  for (const char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of word) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

export function removeNonLetterKeys(obj) {
  for (const key in obj) {
    if (!key.match(/^[a-zA-Z]$/)) {
      delete obj[key];
    }
  }
}

export function findFirstKeyWithOneValue(obj) {
  const key = Object.keys(obj).find((key) => obj[key] === 1);
  return key || null;
}
