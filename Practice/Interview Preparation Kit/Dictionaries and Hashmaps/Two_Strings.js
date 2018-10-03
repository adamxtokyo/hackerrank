
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

function twoStrings (str1, str2) {
    let [set1, set2] = [new Set(str1), new Set(str2)]
    for (let char of set1) if (set2.has(char)) return 'YES'
    return 'NO'
}
