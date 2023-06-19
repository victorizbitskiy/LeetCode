function addDigits(num: number): number {
    let s = num.toString()

    while(s.length !== 1){
      s = s.split('').reduce((acc, item) => acc + Number(item), 0).toString()
    }
    return Number(s)
};
