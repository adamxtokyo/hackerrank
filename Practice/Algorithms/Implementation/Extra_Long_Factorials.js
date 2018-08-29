
/*
 * Practice > Algorithms > Implementation > Extra Long Factorials
 * https://www.hackerrank.com/challenges/extra-long-factorials/problem
 */

// Add big number support for JS
const BigNumber = require('bignumber.js')

const extraLongFactorials = (n, f = new BigNumber(1)) => n === 1 ? console.log(f.toFixed()) : extraLongFactorials(n - 1, f.times(n))
