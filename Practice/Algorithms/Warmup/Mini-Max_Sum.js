
/*
 * Practice > Algorithms > Warmup > Mini-Max Sum
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

function miniMaxSum (arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0)
    return console.log(`${sum - Math.max(...arr)} ${sum - Math.min(...arr)}`)
}
