
/*
 * Practice > Algorithms > Implementation > Sock Merchant
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */

function sockMerchant (n, arr) {
    let count = new Array(Math.max(...arr) + 1).fill(0)
    return arr.reduce((acc, val) => ++count[val] % 2 === 0 ? ++acc : acc, 0)
}
