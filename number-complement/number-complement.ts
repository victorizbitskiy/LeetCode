function findComplement(num: number): number {
    const bin = num.toString(2).split("");
    const cmp = bin.map((v) => (v === "0" ? "1" : "0"));
    return parseInt(cmp.join(""), 2);
};