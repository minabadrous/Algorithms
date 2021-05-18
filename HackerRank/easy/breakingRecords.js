function breakingRecords(scores) {
  let min = scores[0];
  let max = min;
  let minC = 0;
  let maxC = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      maxC++;
    } else if (scores[i] < min) {
      min = scores[i];
      minC++;
    }
  }

  return [maxC, minC];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

// Count number of times the player breaks minimum of maximum record
