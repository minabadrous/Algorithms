function nestedEvenSum (obj) {
let sum = 0;

  function iterateObject(caseObj){
    for(index in caseObj){
      let value = caseObj[index]
      if(typeof value === 'object' && value !== null){
        iterateObject(value);
      }

      else if(!isNaN(value) && value%2 == 0){
        sum += value;
      } 
    }
  }

  iterateObject(obj)
  return sum;
}
  

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log('sum is:', nestedEvenSum(obj1)); // 6
console.log('sum is:', nestedEvenSum(obj2)); // 10
