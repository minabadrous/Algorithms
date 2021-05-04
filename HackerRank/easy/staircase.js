function staircase(n) {
    // Write your code here
    let res = '';
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(j >= n - i - 1) res += '#';
            else res += ' ';
        }
        res += '\n';
    }
    
    console.log(res);
}

// Write a program that prints a staircase of size n.