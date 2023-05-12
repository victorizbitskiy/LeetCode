function isSubsequence(s: string, t: string): boolean {

  if (s.length > t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s[i])

    if (index === -1) {
      return false;
    }

    t = t.slice(index + 1, t.length)
  }

  return true;
};