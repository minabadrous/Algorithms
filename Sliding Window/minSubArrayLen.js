function minSubArrayLen(arr, num){
    // initiate tempSum, tempLen and minLen with index 0
    let tempSum = arr[0];
    let tempLen = 0;
    let minLen = null;

    // loop array
    for(let i=1; i<arr.length; i++){
        // if tempLen > maxLen overwrite maxLen
        tempLen++;
        tempSum += arr[i];
        if(tempSum >= num){
            if(minLen == null || tempLen < minLen){
                minLen = tempLen;
            } 
            i = i - tempLen + 1;
            tempLen = 0;
            tempSum = 0;
        }
    }
    // return to next index and start over
    return minLen == null ? 0 : minLen;
}

console.log('output:', minSubArrayLen([2,3,1,2,4,3], 7));
// console.log('output:', minSubArrayLen([2,1,6,5,4], 9));
// console.log('output:', minSubArrayLen([4,3,3,8,1,2,3], 11));
// console.log('output:', minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
