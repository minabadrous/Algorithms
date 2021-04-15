function findLongestSubstring(string){
    let len = string.length;
    console.log('len:', len)
  
    // 0 and 1 length cases
    if(len <= 1) return len;
  
    // define maxLen, templen, lookup object
    let maxLen = 0;
    let tempLen = 0;
    let lookup = {};
  
    // loop string
    for(let i=0; i<len; i++){

      let char = string[i];
      // lookup char
      if(lookup[char]){
        // if exists compare Length and reset loop with next index
        if(tempLen > maxLen){
          maxLen = tempLen;
        } 

        i = i - tempLen + 1;
        tempLen = 0;
        lookup = {};
      }
      else{
        lookup[char] = 1;
        tempLen++;
      }
    }
    // return maxLen
    return maxLen < tempLen ? tempLen : maxLen;
  }
  
  // console.log(findLongestSubstring('rithmschool')) //7
  console.log(findLongestSubstring('thecatinthehat')) //7
  // console.log(findLongestSubstring('longestsubstring')) //8
  // console.log(findLongestSubstring('thisisawesome'))