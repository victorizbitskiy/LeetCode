type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const fnPromise = fn(...args);

        const limitPromise = new Promise((res, rej) => {
            setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([fnPromise, limitPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */