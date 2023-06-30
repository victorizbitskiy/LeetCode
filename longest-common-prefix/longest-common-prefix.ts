function longestCommonPrefix(strs: string[]): string {
 if (strs.length === 0) { return "" }
  if (strs.length === 1) { return strs[0] }
  let possiblePrefix = ""
  
  while (strs.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = strs[0].substring(0, possiblePrefix.length + 1)

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix
    } else { break }
  }

  return possiblePrefix.slice(0, -1)
};