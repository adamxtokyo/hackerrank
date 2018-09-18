
/*
 * Practice > Algorithms > Greedy > Maximum Perimeter Triangle
 * https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem
 */

function maximumPerimeterTriangle (s) {
    let r = [-1]
    s.sort((a,b) => b-a)
    for (let i = 0, l = s.length-2; i < l; i++) {
        if (s[i] + s[i+1] <= s[i+2] || s[i+1] + s[i+2] <= s[i] || s[i+2] + s[i] <= s[i+1]) continue
        if (s.slice(i, i+3).reduce((a,v) => a+v, 0) > r.reduce((a,v) => a+v, 0)) r = s.slice(i, i+3)
    }
    return r.reverse()
}
