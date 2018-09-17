
/*
 * Practice > Algorithms > Greedy > Marc's Cakewalk
 * https://www.hackerrank.com/challenges/marcs-cakewalk/problem
 */

function marcsCakewalk (cupcakes) {
    cupcakes.sort((a,b) => b-a)
    return cupcakes.reduce((miles, c, i) => miles + Math.pow(2, i) * c, 0)
}
