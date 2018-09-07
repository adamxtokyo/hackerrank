
/*
 * Practice > Algorithms > Strings > Weighted Uniform Strings
 * https://www.hackerrank.com/challenges/weighted-uniform-string/problem
 */

function weightedUniformStrings (s, queries) {
    let w = new Set()
    for (let i = 0, l = s.length, m = 1; i < l; i++, m = 1) {
        while (s[i] === s[i+1]) {
            w.add( (s[i].toUpperCase().charCodeAt(0) - 64) * m )
            m++
            i++
        }
        w.add( (s[i].toUpperCase().charCodeAt(0) - 64) * m )
    }
    return queries.map(x => w.has(x) ? 'Yes' : 'No')
}
