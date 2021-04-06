function findLongestSubstring(string){
    let len = string.length;
  
    // 0 and 1 length cases
    if(len <= 1) return len;
  
    // define maxLen, templen, lookup object
    let maxLen = 1;
    let tempLen = 1;
    let lookup = {};
  
    // loop string
    for(let i=0; i<string.length; i++){
      let char = string[i];
      // lookup char
      if(lookup[char]){
        // if exists compare Length and reset loop with next index
        if(tempLen > maxLen) maxLen = tempLen-1;
        i = i - tempLen + 1;
        tempLen = 0;
        lookup = {};
      }
      else lookup[char] = 1;
      tempLen++;
    }
    // return maxLen
    return maxLen;
  }
  
  console.log(findLongestSubstring('rithmschool'))
  // console.log(findLongestSubstring('thecatinthehat'))
  // console.log(findLongestSubstring('thisisawesome'))
  
  
  