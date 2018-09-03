
/*
 * Practice > Algorithms > Implementation > Chocolate Feast
 * https://www.hackerrank.com/challenges/chocolate-feast/problem
 */

function chocolateFeast (n, c, m) {
    let papers = Math.floor(n / c)
    let total = 0 + papers

    while (papers >= m) {
        let free = Math.floor(papers / m)
        total += free
        papers += free - free * m
    }

    return total
}
