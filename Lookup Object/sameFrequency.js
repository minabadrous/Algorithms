function sameFrequency(first, second){
    // check length
    if(first.length != second.length) return false;
    
    // number to string
    let digit = first.toString() + second.toString();
    
    // iterate and count
    let lookup = {};
    for(let i in digit){
        let char = digit[i];
        lookup[char] ? delete lookup[char] : lookup[char] = 1;
    }
    
    // return boolean
    return (Object.keys(lookup).length === 0);
}

sameFrequency(318, 831)
// sameFrequency(11, 12)
