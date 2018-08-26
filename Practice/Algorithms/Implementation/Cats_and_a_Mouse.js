
/*
 * Practice > Algorithms > Implementation > Cats and a Mouse
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

function catAndMouse (a, b, c) {
    if (Math.abs(a-c) === Math.abs(b-c)) return 'Mouse C'
    return Math.abs(a-c) < Math.abs(b-c) ? 'Cat A' : 'Cat B'
}
