type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
  let counter: number = init;
  const returnObj = {} as ReturnObj;
  returnObj.increment = () => { return ++counter };
  returnObj.decrement = () => { return --counter };
  returnObj.reset = () => {
    counter = init;
    return counter;
  };
  return returnObj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */