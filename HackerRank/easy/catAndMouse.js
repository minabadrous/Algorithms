const catAndMouse = (x, y, z) => {
  let first = Math.abs(x - z),
    second = Math.abs(y - z);

  return first === second ? "Mouse C" : first < second ? "Cat A" : "Cat B";
};

console.log(catAndMouse(4, 2, 3));

/*
Two cats and a mouse are at various positions on a line. 
You will be given their starting positions. Your task is to determine which 
cat will reach the mouse first, assuming the mouse does not move and the cats 
travel at equal speed. If the cats arrive at the same time, the mouse will be 
allowed to move and it will escape while they fight.
*/
