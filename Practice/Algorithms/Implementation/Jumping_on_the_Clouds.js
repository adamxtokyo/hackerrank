
/*
 * Practice > Algorithms > Implementation > Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

function jumpingOnClouds (c) {
    let j = 0
    for (let i = 0; i < c.length - 1; j++) i += c[i+2] === 1 ? 1 : 2
    return j
}
