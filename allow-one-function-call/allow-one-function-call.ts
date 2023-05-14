function once<T extends (...args: any[]) => any>(fn: T):
  ((...args: Parameters<T>) => ReturnType<T> | undefined) {

  let FnHasBeenCalled = false;
  let result: ReturnType<T> | undefined;

  return function (...args) {
    if (!FnHasBeenCalled) {
      result = fn(...args);
      FnHasBeenCalled = true;
      return result;
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */