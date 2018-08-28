
/*
 * Practice > Algorithms > Implementation > Sequence Equation
 * https://www.hackerrank.com/challenges/permutation-equation/problem
 */

const permutationEquation = p => p.map( (val, id, self) => self.indexOf(self.indexOf(++id) + 1) + 1 )
