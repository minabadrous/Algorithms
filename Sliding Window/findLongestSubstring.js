function findLongestSubstring(string){
  // grap an index, loop the string after it, storing charachters met, 
  // untill meeting an existing charachter, compare the temp and max length,
  // then start with the next index

  // grap an index
  let index = 0;
  // have a lookup to store charachters
  let lookup = {};

  // start a temp and max length
  let tempLen = 0;
  let maxLen = 0;

  // loop a substring
  while(index < string.length){
    // found existing character
    if(lookup[string[index]]){
      
      // temp len is bigger
      if(tempLen > maxLen){
        maxLen = tempLen;
      }

      // reset lookup
      lookup = {};
      index = index - tempLen + 1;
      tempLen = 0;
    }

    // didn't find a match
    else {
      lookup[string[index]] = 1;
      tempLen++;
      index++;
    }
  }

  return tempLen > maxLen ? tempLen : maxLen;
}
  
  // console.log(findLongestSubstring('rithmschool'))
  console.log(findLongestSubstring('thecatinthehat'))
  // console.log(findLongestSubstring('thisisawesome'))
  
  
  