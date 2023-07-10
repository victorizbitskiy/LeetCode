function dayOfYear(date: string): number {
    let startDate = new Date(date.slice(0, 4) + '-01-01')
    let endDate = new Date(date)
    let result = 1

    while (startDate.toString() !== endDate.toString()) {
        startDate.setDate(startDate.getDate() + 1)
        result += 1
    }

    return result
};
