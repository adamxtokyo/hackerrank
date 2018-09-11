
/*
 * Practice > Algorithms > Implementation > Lisa's Workbook
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 */

function workbook (n, k, arr) {

    let sp = 0

    for (let chapter = 0, page = 1; chapter <= n; chapter++) {
        for (let problem = 1; problem <= arr[chapter]; problem++) {
            if (problem === page) sp++
            if (problem % k === 0 || problem === arr[chapter]) page++
        }
    }

    return sp
}
