function isHappy(n) {
    const set = new Set();

    while (!set.has(n)) {
        set.add(n);
        const strNum = n.toString();
        n = 0;

        for (let el of strNum) {
            n += Number(el) ** 2;
        }

        if (n === 1) {
            return true;
        }
    }

    return false;
};