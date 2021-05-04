function birthdayCakeCandles(candles) {
    let max = candles[0];
    let lookup = {max:1};
    lookup[max] = 0

    for(let i in candles){
        let candle = candles[i];

        if( candle > max ){
            lookup[candle] = 1;
            max = candle;
        }
        
        else if(candle === max) lookup[candle]++;
    }
    return lookup[max];
}


// You are in charge of the cake for a child's birthday. You have decided the cake will 
// have one candle for each year of their total age. They will only be able to blow out 
// the tallest of the candles. Count how many candles are tallest.