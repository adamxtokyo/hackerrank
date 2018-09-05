
/*
 * Practice > Algorithms > Strings > Mars Exploration
 * https://www.hackerrank.com/challenges/mars-exploration/problem
 */

function marsExploration (s) {
    let sos = ''.padEnd(s.length, 'SOS')
    return s.split('').reduce( (acc, char, id) => acc += char !== sos[id] ? 1 : 0, 0 )
}
