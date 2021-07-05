const pickingNumbers = (arr) => {
  arr.sort((a, b) => a - b);
  let longestSubArray = [];
  let currentSubArray = [];

  arr.map((num, index) => {
    if (Math.abs(num - currentSubArray[0]) <= 1 || index === 0) {
      currentSubArray.push(num);
    } else {
      if (currentSubArray.length > longestSubArray.length) {
        longestSubArray = currentSubArray;
      }

      currentSubArray = [num];
    }
  });

  return Math.max(longestSubArray.length, currentSubArray.length);
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
