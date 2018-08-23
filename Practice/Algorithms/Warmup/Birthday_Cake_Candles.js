
/*
 * Practice > Algorithms > Warmup > Birthday Cake Candles
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

function birthdayCakeCandles (arr) {
    let tallest = Math.max(...arr)
    return arr.reduce((acc, val) => val === tallest ? ++acc : acc, 0)
}
