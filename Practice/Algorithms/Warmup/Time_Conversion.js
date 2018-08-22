
/*
 * Practice > Algorithms > Warmup > Time Conversion
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */

function timeConversion (str) {
    let arr = str.split(':')
    if (arr[2].slice(-2).toLowerCase() === 'pm') {
        if (arr[0] !== '12') arr[0] = (Number(arr[0]) + 12).toString()
    } else {
        if (arr[0] === '12') arr[0] = '00'
    }

    return arr.join(':').slice(0, -2)
}
