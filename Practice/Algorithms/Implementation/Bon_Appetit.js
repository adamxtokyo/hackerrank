
/*
 * Practice > Algorithms > Implementation > Bon Appétit
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 */

function bonAppetit (bill, k, b) {
    let anna = bill.reduce((acc, val, id) => id === k ? acc : acc + val, 0) / 2
    return console.log(anna === b ? `Bon Appetit` : b - anna)
}
