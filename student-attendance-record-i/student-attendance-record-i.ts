function checkRecord(s: string): boolean {
    let a = 0
    let l = 0

    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'A') {
            a += 1
            l = 0
        }

        if (s[i] === 'P') {
            l = 0
        }

        if (s[i] === 'L') {
            l += 1
        }

        if (a === 2) {
            return false
        }

        if (l === 3) {
            return false
        }
    }
    return true
};