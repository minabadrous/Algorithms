const formingMagicSquare = (square) => {
  const magicNum = 15;
  let status = [];
  let lookup = {};
  let cost = 0;

  const getSum = (col) => square[0][col] + square[1][col] + square[2][col];

  const checkAll = () => {
    let finished = true;
    status = [];

    for (let i = 0; i < 3; i++) {
      status.push(magicNum - getSum(i));
      finished = finished && getSum(i) === magicNum;
    }

    return finished;
  };

  const loopLine = (j, action) => {
    let temp = 0;
    let i = 0;
    square[i][j] + status[j] === magicNum;
    while (i < 3) {
      let val = square[i][j];
      temp += val;

      if (action === "replace") {
        if (!lookup[status[j] + val]) {
          val += status[j];
          square[i][j] = val;
          cost += status[j];
          status[j] = 0;
          lookup[val] = 1;
        }

        else if (lookup[val]) {
          console.log(lookup);

          square[i][j] = generated();
          i = -1;
          for (el = i; el >= 0; el--) {
            lookup[square[el][j]] = false;
          }
        } else lookup[val] = 1;
      }

      i++;
    }
  };

  const generated = () => {
    for (let i = 1; i < 10; i++) {
      if (!lookup[i]) return i;
    }
  };

  const checkCol = (j) => {
    for (let i = 0; i < 3; i++) {
      if (lookup[square[i][j]]) {
        square[i][j] = generated();
      }
    }
  };

  checkAll();
  status.map((col, colX) => {
    checkCol(colX);
    loopLine(colX, "replace");
  });

  return square;
};

console.log(
  formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);
