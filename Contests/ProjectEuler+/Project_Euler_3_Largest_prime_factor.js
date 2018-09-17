
/*
 * Contests > ProjectEuler+ > Project Euler #3: Largest prime factor
 * https://www.hackerrank.com/contests/projecteuler/challenges/euler003
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let arr = input_stdin.split('\n').map(x => Number(x))
    return main(arr[0], arr.slice(1))
})

function main (t, arr) {
    for (let i = 0; i < t; i++) process.stdout.write(prime(arr[i]) + '\n')
}

/////////////// IGNORE ABOVE THIS LINE ////////////////////

function prime (n) {

    let i = 2
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            n /= i
            continue
        }
        i++
    }

    return n
}
