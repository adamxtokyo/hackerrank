
/*
 * Practice > Algorithms > Implementation > Almost Sorted
 * https://www.hackerrank.com/challenges/almost-sorted/problem
 */

function almostSorted (unsorted) {
    let sorted = unsorted.slice().sort( (a, b) => a - b)
    let a, b

    for (let i = 0, l = sorted.length; i < l; i++) {
        if (!a && sorted[i] !== unsorted[i]) a = i+1
        if (a && sorted[i] !== unsorted[i]) b = i+1
    }

    let swap = unsorted.slice()
    swap.splice(a-1, 1, unsorted[b-1])
    swap.splice(b-1, 1, unsorted[a-1])
    if (swap.every( (val, id) => val === sorted[id] )) return console.log(`yes\nswap ${a} ${b}`)

    let reverse = unsorted.slice()
    reverse.splice(a-1, b-a+1, ...unsorted.slice(a-1, b).reverse())
    if (reverse.every( (val, id) => val === sorted[id] )) return console.log(`yes\nreverse ${a} ${b}`)

    return console.log(`no`)
}
