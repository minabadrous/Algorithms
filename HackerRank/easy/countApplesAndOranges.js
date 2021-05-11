function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  const lenIt = (arr, c) =>
    arr.map((num) => num + c).filter((num) => num >= s && num <= t).length;

  let app = lenIt(apples, a);
  let ora = lenIt(oranges, b);

  console.log(app + "\n" + ora);
}

/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, 
determine the number of apples and oranges that land on Sam's house.

 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges

*/
