//checck leap Year.....................
function check_leapYear(year) {
  if (year > 0 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
// check_leapYear(2000);

// multiplication table..........................
function multiplication_table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
// multiplication_table(5)

//hcf and lcm....................................
function Hcf_lcm(a, b) {
  let ta = a;
  let tb = b;
  while (tb != 0) {
    let temp = tb;
    tb = ta % tb;
    ta = temp;
  }
  console.log(`hcf : ${ta}`);
  console.log(`lcm : ${(a * b) / ta}`);
}
// Hcf_lcm(7, 5);

// /Keep taking numbers as inputs till the user enters ‘x’, after that print sum of all....................
function sum_of_all_users_entered() {
  let arr = [];
  while (true) {
    let ch = prompt("Enter number (or 'x' to stop):", "0");
    if (ch == "x") break;
    arr.push(Number(ch));
  }

  let sum = arr.reduce((a, b) => a + b, 0);
  console.log("sum: ", sum);
}
// sum_of_all_users_entered();

// Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest..................
function simple_interest(p, t, r) {
  console.log(
    `Simple Interest of ${p} rupees for ${t}year with ${r} rate is : ${
      (p * t * r) / 100
    } `
  );
}
// simple_interest(1000, 2, 5);

// program to input principal, time, and rate (P, T, R) from the user and find Compound Interest
// ci = p*(1+ (r/100))^t - p   .............................................

function Compound_interest(p, t, r) {
  let ci = p * Math.pow(1 + r / 100, t) - p;
  console.log(
    `Compound Interest of ${p} rupees for ${t}year with ${r} rate is : ${ci} `
  );
}
// Compound_interest(1000, 2, 5);

// To calculate Fibonacci Series up to n numbers................................
function fibbonacci(n) {
  let fibb = [];
  fibb[0] = 0;
  fibb[1] = 1;
  for (let i = 2; i <= n; i++) {
    fibb[i] = fibb[i - 1] + fibb[i - 2];
  }

  console.log(fibb);
}
// fibbonacci(50);

//  find out whether the given String is Palindrome or not...........................................
function Palindrome_check(n) {
  let isPal = n.split("").reverse().join("") === n;
  console.log(isPal);
}
// Palindrome_check("racecar");

// To find Armstrong Number between two given number.
function Armstrong_check(a, b) {
  let sum = 0;
  let n = String(a).length;

  for (let i = 0; i < n; i++) {
    sum += String(a)[i] ** n;
  }

  console.log(sum == a);
}
// Armstrong_check(153, 3);

// factorial of no ................................
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
// factorial(5);

//
