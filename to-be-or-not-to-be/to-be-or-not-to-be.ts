type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (x: any) : boolean => {
    if(x === val) {
      return true;
    } else{
        throw Error('Not Equal')
    }
  }

  const notToBe = (x: any): boolean => {
      if(x !== val) {
          return true;
      }else{
          throw Error('Equal');
      }
  }
  return {
    toBe,
    notToBe
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */