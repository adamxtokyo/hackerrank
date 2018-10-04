
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Sherlock and Anagrams
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
 */

function sherlockAndAnagrams (str) {

    let substr_map = new Map()
    for (let i = 0, l = str.length; i < l; i++) {
        for (let j = i; j < l; j++) {
            let substr = [ ...str.slice(i, j+1) ].sort().join('')
            let count = substr_map.get(substr) || 0
            substr_map.set(substr, count + 1)
        }
    }

    return [ ...substr_map.values() ].reduce((a,v) => a += v > 1 ? v * (v - 1)/2 : 0, 0)
}
