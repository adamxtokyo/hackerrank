
/*
 * Practice > Algorithms > Greedy > Mark and Toys
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 */

function maximumToys (prices, k) {
    prices.sort((a,b) => b-a)
    let bought = 0
    while ((k -= prices.pop()) >= 0) bought++
    return bought
}
