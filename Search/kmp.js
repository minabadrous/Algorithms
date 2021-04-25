const kmp = (string, pattern) => {
  let kmpArr = [0];
  let index = 0;
  for (let j = 1; j < pattern.length; j++) {
    if (pattern[j] === pattern[index]) {
      kmpArr.push(index + 1);
      index++;
    } else if (index > 0) {
      index--;
      j--;
    } else kmpArr.push(0);
  }

  index = 0;
  let start = 0;
  let j = start;

  while (j < string.length) {

    if (string[j] === pattern[index]) {
      if (index === pattern.length - 1) return true;
      index++;
      j++;
    } else {
      if (kmpArr[index] === 0) {
        start++;
        j = start;
        index = 0;
      } else {
        start += kmpArr[index];
        j = start;
        index = kmpArr[index];
      }
    }
  }

  return false;
};
console.log(kmp("acat acgacacagt", "acacagt"));
