function maxSubarraySum(arr, len){
  // define window tempSum and maxSum
  let tempSum = arr[0];
  for(let i=1; i<=len-1; i++){
    tempSum += arr[i];
  }
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

console.log(maxSubarraySum([100,200,300,400], 2));
// console.log(maxSubarraySum([1,3],3))