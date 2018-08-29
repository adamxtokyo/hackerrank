
/*
 * Practice > Algorithms > Implementation > Jumping on the Clouds: Revisited
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */

function jumpingOnClouds (c, k, i = 0, e = 100) {
    let j = (i + k) % c.length
    e = c[j] === 1 ? e - 3 : e - 1
    console.log(j ,c[j], e)
    return j <= i ? e : jumpingOnClouds(c, k, j, e)
}
