const recursiveRange = num => 
   num === 0
   ? 0
   : num + recursiveRange(num - 1);

recursiveRange(6) // 21
// recursiveRange(10) // 55 


 
 