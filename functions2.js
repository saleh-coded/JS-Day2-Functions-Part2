/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
    // Your code here
    if (1 === n % 2) {
        return true;
    } else {
        return false;
    }
  }

let x = isOdd(7);
console.log(x);

let m = isOdd(10);
console.log(m);


// Task 3
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
    // Your code here
    if (1 === n % 2) {
        return n = n*n;
    } else {
        return n = n+n;
    }
  }

let c = squareOrDouble(16);
console.log(c);

let k = squareOrDouble(9);
console.log(k);


// Task 2
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
// function oddsSmallerThan(n) {
    // Your code here
//     for (n-1)
//     if (n % 2 == 0) {
//         return false;
//     } else {
//         return true;
//     }
//   }