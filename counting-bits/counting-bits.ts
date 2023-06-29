function countBits(n: number): number[] {
    let result = []

    for (let i = 0; i <= n; i++) {
        let j = i
        let count = 0

        while (j > 0) {
            count += j & 1
            j >>= 1
        }

        result.push(count)
    }
    return result

};