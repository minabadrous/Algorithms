function validAnagram(first, second){
    // refuse strings with different length
    if(first.length !== second.length) return false;
    
    // create lookup object
    let lookup = {};
    for(let letter of first){
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
    }

    // compare with second string
    for(let letter of second){
        if( !lookup[letter] ) return false;
        lookup[letter]--;
    }
    
    // return true
    return true
}

validAnagram('haha', 'ahah')