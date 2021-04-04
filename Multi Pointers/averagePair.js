function averagePair(arr, avg){
    // discard empty and 1 value arrays
    if(arr.length < 3) return false;
    // declare lead and follow
    let moving = 1;
    let fixed = 0;
    //loop whlie lead < length
    while(moving <= arr.length && fixed <= arr.length){
        let still = arr[fixed];
        let scouter = arr[moving];
        console.log(still, scouter);
        if(scouter + still == avg * 2 && scouter !== still) return true;
        else if(scouter + still > avg * 2 || scouter === arr.length-1){
            
            moving = 0;
            fixed++;
        }
        else moving++;
    }
    // return boolean
    return false;
}
// averagePair([1,3,3,5,6,7,10,12,19], 8)
averagePair([1,2,3],2.5)