
/*
 * Practice > Algorithms > Greedy > Grid Challenge
 * https://www.hackerrank.com/challenges/grid-challenge/problem
 */

function gridChallenge (grid) {
    let sgrid = grid.map( r => r.split('').map( c => c.charCodeAt(0) ).sort((a,b) => a-b) )
    for (let j = 0, l1 = sgrid.length; j < l1; j++) {
        for (let i = 0, l2 = l1-1; i < l2; i++) if (sgrid[i][j] > sgrid[i+1][j]) return 'NO'
    }
    return 'YES'
}
