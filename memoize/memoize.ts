type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const map = new Map<string, any>();

    return function (...args) {
        const key = JSON.stringify(args);

        if (map.has(key)) {
            return map.get(key);
        }

        map.set(key, fn(...args));
        return map.get(key)
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */