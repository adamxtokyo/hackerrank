
/*
 * Practice > Algorithms > Implementation > Service Lane
 * https://www.hackerrank.com/challenges/service-lane/problem
 */

const serviceLane = (width, cases) => cases.map(c => Math.min(...width.slice(c[0], c[1]+1)))

// Modifications to main(), since the original code didn't pass the correct arguments to solve the algorithm
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const [n, t] = [...readLine().split(' ')].map(x => parseInt(x, 10))
    const width = readLine().split(' ').map(x => parseInt(x, 10))
    const cases = Array(t).fill(0).map(x => readLine().split(' ').map(y => parseInt(y, 10)))
    let result = serviceLane(width, cases)

    ws.write(result.join("\n") + "\n")
    ws.end()
}
