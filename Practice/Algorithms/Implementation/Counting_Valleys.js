
/*
 * Practice > Algorithms > Implementation > Counting Valleys
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */

function countingValleys (n, s) {
    let elevation = 0
    return s.split('').reduce((valleys, direction) => {
        elevation += direction === 'U' ? 1 : -1
        return elevation === 0 && direction === 'U' ? ++valleys : valleys
    }, 0)
}
