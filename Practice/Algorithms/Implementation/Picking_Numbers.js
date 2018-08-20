
/*
 * Practice > Algorithms > Implementation > Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 */

function pickingNumbers (arr) {
    let subarrs = {}
    let result = 0

    arr.forEach( x => {
        // Create String labels
        let a = `${x}${x+1}`
        let b = `${x-1}${x}`

        // Increment
        subarrs[a] = subarrs[a] ? ++subarrs[a] : 1
        subarrs[b] = subarrs[b] ? ++subarrs[b] : 1

        // Set the currently longest array length as the result
        if (subarrs[a] > result) result = subarrs[a]
        if (subarrs[b] > result) result = subarrs[b]
    })

    return result
}
