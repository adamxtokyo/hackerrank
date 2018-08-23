
/*
 * Practice > Algorithms > Implementation > Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 */

const angryProfessor = (k, a) => a.reduce( (acc, val) => val > 0 ? acc : ++acc, 0 ) < k ? 'YES' : 'NO'
