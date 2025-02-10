const transformFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

const truncateStringWithSymbols = (str, maxLength, symbols) => {
  const maxLength = 40;
  const symbolsToTrim = [' ', ',', '.', '!', '?', ':', ';', '/'];
  if (str.length <= maxLength) return str;

  let truncated = str.slice(0, maxLength);

  let lastSymbolIndex = -1;

  symbolsToTrim.forEach((symbol) => {
    const index = truncated.lastIndexOf(symbol);
    if (index > lastSymbolIndex) {
      lastSymbolIndex = index;
    }
  });

  if (lastSymbolIndex !== -1) {
    truncated = truncated.slice(0, lastSymbolIndex);
  }

  return truncated.trim() + '...';
};

const isSubstring = (str1, str2) => {
  return str1.includes(str2) || str2.includes(str1);
};
