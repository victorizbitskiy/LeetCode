type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const it = functions[Symbol.iterator]()
  
  const add = async () => {
    const { value, done } = it.next()
    if(value) {
      await value()
      await add()
    }
  }
  
  const arr = []
  for(let i = 0; i < n; i++) {
    arr.push(add())
  }
  
  return Promise.all(arr)
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */