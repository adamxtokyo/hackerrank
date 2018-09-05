
/*
 * Practice > Algorithms > Strings > Pangrams
 * https://www.hackerrank.com/challenges/pangrams/problem
 */

function pangrams (s) {
    let r = []
    s.toLowerCase().split('').forEach( x => r[x.charCodeAt(0)] = 1 )
    return r.slice(97, 123).reduce( (acc, val) => acc += val, 0) === 26 ? 'pangram' : 'not pangram'
}
