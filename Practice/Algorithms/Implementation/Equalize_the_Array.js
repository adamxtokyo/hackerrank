
/*
 * Practice > Algorithms > Implementation > Equalize the Array
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 */

function equalizeArray (arr) {
    let c = new Array(101).fill(0)
    arr.forEach(x => c[x]++)
    return c.reduce((acc, x) => acc + x, 0) - Math.max(...c)
}
