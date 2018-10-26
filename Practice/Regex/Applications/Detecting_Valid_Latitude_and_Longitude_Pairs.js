
/*
 * Practice > Regex > Applications > Detecting Valid Latitude and Longitude Pairs
 * https://www.hackerrank.com/challenges/detecting-valid-latitude-and-longitude/problem
 */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let stdin = ''

process.stdin.on('data', (data) => {
    stdin += data
})

process.stdin.on('end', () => {
    const input = stdin.split('\n')

    const n = Number(input[0])
    const coordinates = input.slice(1, 1 + n)

    coordinates.forEach(c => process.stdout.write(`${areValidCoordinates(c)}\n`))
})

// --- SOLUTION BELOW --- //

function areValidCoordinates (coordinates) {
    const regex = /^\([+-]?(90(\.0+)?|[1-8][0-9](\.[0-9]+)?|[0-9](\.[0-9]+)?), [+-]?(180(\.0+)?|1[0-7][0-9](\.[0-9]+)?|[1-9][0-9](\.[0-9]+)?|[0-9](\.[0-9]+)?)\)$/
    return regex.test(coordinates) ? 'Valid' : 'Invalid'
}
