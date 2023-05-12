function isIsomorphic(s: string, t: string): boolean {

  if (s.length !== t.length) {
    return false;
  }

  const map = new Map<string, string>();
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {

    if (!map.has(s[i]) && !set.has(t[i])) {
      map.set(s[i], t[i]);
      set.add(t[i])
    } else if (map.get(s[i]) !== t[i]) {
      return false
    }
  }

  return true;

};