
/*
 * Practice > Algorithms > Implementation > Apple and Orange
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

function countApplesAndOranges (s, t, a, b, apples, oranges) {
    let apples_in_range = apples.map(x => a + x).reduce((acc, val) => val >= s && val <= t ? ++acc : acc, 0)
    let oranges_in_range = oranges.map(x => b + x).reduce((acc, val) => val >= s && val <= t ? ++acc : acc, 0)
    return console.log(`${apples_in_range}\n${oranges_in_range}`)
}
