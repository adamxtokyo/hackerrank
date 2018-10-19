
/*
 * Practice > Regex > Applications > IP Address Validation
 * https://www.hackerrank.com/challenges/ip-address-validation/problem
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''

process.stdin.on('data', data => input_stdin += data)
process.stdin.on('end', () => {
    let input =  input_stdin.split('\n')

    let n = Number(input[0])
    let ip_addresses = input.slice(1, 1+n)

    let result = isValidIp(ip_addresses)
    process.stdout.write(result.join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidIp (ip_addresses) {
    const ipv4_regex = /^(?:(?:[0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:[0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/
    const ipv6_regex = /^(?:(?:[0-9a-f]?[0-9a-f]?[0-9a-f]?[0-9a-f]):){7}(?:[0-9a-f]?[0-9a-f]?[0-9a-f]?[0-9a-f])$/i
    return ip_addresses.map(ip => {
        if (ipv4_regex.test(ip)) return 'IPv4'
        if (ipv6_regex.test(ip)) return 'IPv6'
        return 'Neither'
    })
}
