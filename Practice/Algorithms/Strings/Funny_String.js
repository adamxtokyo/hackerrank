
/*
 * Practice > Algorithms > Strings > Funny String
 * https://www.hackerrank.com/challenges/funny-string/problem
 */

function funnyString (s) {

    let r = s.split('').reverse()
    let sa = []
    let ra = []

    for (let i = 1, l = s.length; i < l; i++) {
        sa.push( Math.abs( s[i-1].codePointAt(0) - s[i].codePointAt(0) ) )
        ra.push( Math.abs( r[i-1].codePointAt(0) - r[i].codePointAt(0) ) )
    }

    return sa.join('.') === ra.join('.') ? 'Funny' : 'Not Funny'
}
