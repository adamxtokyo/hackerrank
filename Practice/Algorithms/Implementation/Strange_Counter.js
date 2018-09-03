
/*
 * Practice > Algorithms > Implementation > Strange Counter
 * https://www.hackerrank.com/challenges/strange-code/problem
 */

function strangeCounter (t, c = 0) {
    let f = 3 * Math.pow(2, c)
    return t-f > 0 ? strangeCounter(t-f, ++c) : f-t+1
}
