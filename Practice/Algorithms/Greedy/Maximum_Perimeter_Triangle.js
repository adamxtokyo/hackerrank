
/*
 * Practice > Algorithms > Greedy > Maximum Perimeter Triangle
 * https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem
 */

function maximumPerimeterTriangle (s) {
    s.sort((a,b) => a-b)
    for (let i = s.length-3; i >= 0; i--) if (s[i] + s[i+1] > s[i+2]) return s.slice(i, i+3)
    return [-1]
}
