function compareTriplets(a, b) {
    // Write your code here
    let res = [0, 0];
    
    for(let i=0; i<a.length; i++){
        if(a[i] > b[i]) res[0]++;
        else if(a[i] < b[i]) res[1]++;
    }
    
    return res;
}