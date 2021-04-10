function findLongestSubstring(string){

  // declare start point, seen object and longest length
  let start = 0;
  let seen = {};
  let longest = 0;

  for(let i=0; i<string.length; i++){
    let char = string[i];
    if(seen[char]) start = Math.max(start, seen[char]);

    // check longest
    longest = Math.max(longest, i - start + 1);
    // update seen
    seen[char] = i + 1;
  }

  return longest;
}
  
  // console.log(findLongestSubstring('rithmschool'))
  console.log(findLongestSubstring('thecatinthehat'))
  // console.log(findLongestSubstring('thisisawesome'))
  
  
  