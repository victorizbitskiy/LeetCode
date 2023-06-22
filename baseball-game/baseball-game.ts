function calPoints(operations: string[]): number {
    const stack: number[] = [];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2])
                break
            case 'D':
                stack.push(stack[stack.length - 1] * 2)
                break          
            case 'C':
                stack.pop()
                break
            default:
                stack.push(+operations[i]);
        }
    }

    return stack.reduce((acc, v) => acc += v, 0);
};