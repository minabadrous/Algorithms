function maxSubArraySum(arr, len){
  // define window tempSum and maxSum
  let tempSum = arr.slice(0, len).reduce((a,b) => a + b);
  let maxSum = tempSum;

  // loop until length
  for(let i=len; i<arr.length; i++){
    tempSum += (arr[i] - arr[i-len]);
    // compare sums
    if(tempSum > maxSum) maxSum = tempSum;
  }

  //return maxSum
  return maxSum;
}

console.log(maxSubArraySum([100,200,300,400], 2));
// console.log(maxSubarraySum([1,3],3))