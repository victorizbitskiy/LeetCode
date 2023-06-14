function isEmpty(obj: Record<string, any> | any[]): boolean {
    return obj &&
    Object.keys(obj).length === 0
};