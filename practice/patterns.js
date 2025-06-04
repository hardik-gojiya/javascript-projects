//     *
//    **
//   ***
//  ****
// *****
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}
// pattern1(5);

//     *
//    ***
//   *****
//  *******
// *********
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}
// pattern2(5);

//     *
//    ***
//   *****
//    ***
//     *
function pattern3(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      row += "*";
    }

    console.log(row);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      row += "*";
    }

    console.log(row);
  }
}
// pattern3(3);

// *****
// *   *
// *   *
// *   *
// *****
function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// pattern4(5);

//     1
//    121
//   12321
//  1234321
// 123454321
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }

    for (let j = 1; j < i; j++) {
      row += j;
    }
    for (let j = i; j > 0; j--) {
      row += j;
    }

    console.log(row);
  }
}
// pattern5(5);
