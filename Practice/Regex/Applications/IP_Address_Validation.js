
/*
 * Practice > Regex > Applications > IP Address Validation
 * https://www.hackerrank.com/challenges/ip-address-validation/problem
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
    const ipAddresses = input.slice(1, 1 + n)

    const result = isValidIp(ipAddresses)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidIp (ipAddresses) {
    const ipv4 = /^(?:(?:[0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:[0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/
    const ipv6 = /^(?:(?:[0-9a-f]?[0-9a-f]?[0-9a-f]?[0-9a-f]):){7}(?:[0-9a-f]?[0-9a-f]?[0-9a-f]?[0-9a-f])$/i
    return ipAddresses.map((ip) => {
        if (ipv4.test(ip)) return 'IPv4'
        if (ipv6.test(ip)) return 'IPv6'
        return 'Neither'
    })
}
