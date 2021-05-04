const kmp = (string, pattern) => {
  const createTable = pat => {
    let table = [0];
    let i = 0;
    let j = 1;

    while(j < pat.length){
      if(pat[j] === pat[i]){
        table.push(i + 1);
        i++;
        j++;
      }

      else{
        if(i === 0){
          table.push(0);
          j++;
        }
        else i--;
      }
    }
    return searchString(table);
  }

  const searchString = table => {
    let patIndex = 0;
    let strIndex = 0;

    while(strIndex < string.length){
      
      if(pattern[patIndex] === string[strIndex]){
        if(patIndex === pattern.length - 1) return true;
        patIndex++;
        strIndex++;
      }

      else{
        if(patIndex === 0) strIndex++;
        else patIndex = table[patIndex];
      } 
    }

    return false;
  }

  return createTable(pattern);
};

console.log(kmp("acat acgacacaat", "acacagt"));

//  KMP Table guid
// [ a , c , a , c , a , g , t ]
// [ 0 , 0 , 1 , 2 , 3 , 0 , 0 ]
