
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Minimum Absolute Difference in an Array
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 */

function minimumAbsoluteDifference (arr) {
    arr.sort((a,b) => a-b)
    return arr.reduce( (min_diff,v,i) => {
        let current_diff = Math.abs(v - (arr[i+1] || Infinity))
        return Math.min(current_diff, min_diff)
    }, Infinity)
}
