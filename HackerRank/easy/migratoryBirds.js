function migratoryBirds(arr) {
  let lookup = {};

  arr.map(i => {
    lookup[arr[i]] = lookup[arr[i]] ? lookup[arr[i]] + 1 : 1;
  })

  let values = Object.values(lookup);
  let max = values.indexOf(values.reduce((a, b) => Math.max(a, b)));

  return Object.keys(lookup)[max];
}

console.log(
  migratoryBirds([
    2, 5, 2, 5, 5, 5, 2, 2, 5, 5, 5, 1, 5, 2, 2, 2, 2, 2, 2, 2, 5, 5, 1, 5, 2,
    5, 5, 2, 2, 2, 2, 5, 2, 5, 5, 2, 5, 5, 2, 2, 5, 2, 5, 2, 2, 5, 2, 5, 5, 2,
    2, 5, 1, 5,
  ])
);

/*
Given an array of bird sightings where every element represents a bird type id, 
determine the id of the most frequently sighted type. If more than 1 type has 
been spotted that maximum amount, return the smallest of their ids.
*/