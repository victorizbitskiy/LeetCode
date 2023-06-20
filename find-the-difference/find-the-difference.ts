function findTheDifference(s: string, t: string): string {
    const set = new Set<string>();
    [...s, ...t].forEach((i) => set.has(i) ? set.delete(i) : set.add(i));
    return [...set][0];
};