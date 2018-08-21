
/*
 * Practice > Algorithms > Implementation > The Time in Words
 * https://www.hackerrank.com/challenges/the-time-in-words/problem
 */

function timeInWords (h, m) {
    const hours = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve'
    ]
    let minutes = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'quarter',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
        'half',
    ]

    if (m === 0) return `${hours[h-1]} o' clock`

    if (m === 1) return `one minute past ${hours[h-1]}`
    if (m === 59) return `one minute to ${hours[h]}`

    if (m === 15) return `quarter past ${hours[h-1]}`
    if (m === 45) return `quarter to ${hours[h]}`

    if (m === 30) return `half past ${hours[h-1]}`

    if (m > 1 && m <= 30) return `${minutes[m-1]} minutes past ${hours[h-1]}`
    return `${minutes[60-m-1]} minutes to ${hours[h]}`
}
