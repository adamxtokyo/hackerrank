
/*
 * Practice > Algorithms > Sorting > Big Sorting
 * https://www.hackerrank.com/challenges/big-sorting/problem
 */

const BigNumber = require('bignumber.js')

const bigSorting = arr => arr.sort( (a, b) => new BigNumber(a).comparedTo(new BigNumber(b)) )
