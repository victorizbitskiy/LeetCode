type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timeoutID = null

    return function (...args) {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */