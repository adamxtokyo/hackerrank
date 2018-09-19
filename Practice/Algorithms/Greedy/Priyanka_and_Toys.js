
/*
 * Practice > Algorithms > Greedy > Priyanka and Toys
 * https://www.hackerrank.com/challenges/priyanka-and-toys/problem
 */

function toys (w) {
    let s = [...new Set(w)].sort((a,b) => a-b)
    let c = 0
    for (let i = 0, j = s[i] + 4, l = s.length; i < l; j = s[i] + 4) {
        while (s.indexOf(j) < 0) j--
        i = s.indexOf(j) + 1
        c++
    }
    return c
}
