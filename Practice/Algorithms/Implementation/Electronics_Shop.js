
/*
 * Practice > Algorithms > Implementation > Electronics Shop
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 */

function getMoneySpent (keyboards, drives, b) {
    if (Math.min(...keyboards) + Math.min(...drives) > b) return -1
    let total = 0
    keyboards.forEach( k => drives.forEach( d => total = (k + d) <= b && (k + d) > total ? (k + d) : total ) )
    return total
}
