
/*
 * Practice > Algorithms > Implementation > Minimum Distances
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 */

function minimumDistances (arr) {
    let d = arr.map( (x, id, self) => self.indexOf(x, id + 1) - id ).filter(x => x > 0)
    return d.length === 0 ? -1 : Math.min(...d)
}
