function compareTriplets(a, b) {
    // Write your code here
    let res = [0, 0];
    
    for(let i=0; i<a.length; i++){
        if(a[i] > b[i]) res[0]++;
        else if(a[i] < b[i]) res[1]++;
    }
    
    return res;
}


// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
// awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.