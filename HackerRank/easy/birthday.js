function birthday(s, d, m) {
    let index = 0;
    let result = 0;
    
    while(index < s.length){
        let sum = 0;
        
        for(let i=index; i<m+index; i++){
            sum += s[i];
        }
        
        if(sum === d) result++;
        
        index++;
    }
    
    return result;
}

console.log( birthday([1, 2, 1, 3, 2, 3, 2]) )

/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

1- The length of the segment matches Ron's birth month, and,
2- The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/