function average(salary: number[]): number {
    let sum = 0;
    let maxSalary = salary[0];
    let minSalary = maxSalary;

    if (salary.length === 0) {
        return 0;
    }

    if (salary.length === 1) {
        return salary[0];
    }

    if (salary.length === 2) {
        return salary.reduce((acc, item) => acc + item);
    }

    for (let s of salary) {
        if (maxSalary < s) {
            maxSalary = s;
        }

        if (minSalary > s) {
            minSalary = s;
        }

        sum += s;
    }

    return (sum - minSalary - maxSalary) / (salary.length - 2);
};

