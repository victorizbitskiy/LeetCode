function chunk(arr: any[], size: number): any[][] {
    let result: any[][] = [];
    let start = 0;
    let end = size;
    
    while(start < arr.length){
        result.push(arr.slice(start, end));
        start += size;
        end += size;
    } 
    return result;
};
