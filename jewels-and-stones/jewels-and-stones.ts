function numJewelsInStones(jewels: string, stones: string): number {
    let result = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            result += 1
        }
    }
    return result
};