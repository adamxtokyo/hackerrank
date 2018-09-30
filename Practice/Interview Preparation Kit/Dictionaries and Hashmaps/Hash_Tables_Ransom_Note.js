
/*
 * Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Hash Tables: Ransom Note
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 */

function checkMagazine (magazine, note) {
    let map = new Map()
    magazine.forEach(word => map.set(word, (map.get(word) || 0) + 1))
    for (let i = 0, l = note.length; i < l; i++) {
        if (!(map.get(note[i]) > 0)) return 'No'
        map.set(note[i], map.get(note[i]) - 1)
    }
    return 'Yes'
}
