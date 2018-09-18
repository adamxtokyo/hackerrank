
/*
 * Practice > Algorithms > Greedy > Marc's Cakewalk
 * https://www.hackerrank.com/challenges/marcs-cakewalk/problem
 */

const marcsCakewalk = cupcakes => cupcakes.sort((a,b) => b-a).reduce((m, c, i) => m + Math.pow(2, i) * c, 0)
