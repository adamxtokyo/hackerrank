
/*
 * Practice > Algorithms > Implementation > Divisible Sum Pairs
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 */

function flatlandSpaceStations (n, c) {
    c.sort( (a, b) => a - b )
    let md = Math.max(c[0]-0, n-1-c[c.length-1])
    for (let i = 1, l = c.length; i < l; i++) md = Math.max(Math.floor((c[i] - c[i-1]) / 2), md)
    return md
}
