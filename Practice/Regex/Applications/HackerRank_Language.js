
/*
 * Practice > Regex > Applications > HackerRank Language
 * https://www.hackerrank.com/challenges/hackerrank-language/problem
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
    const apiRequests = input.slice(1, 1 + n).map(x => x.split(' '))

    const results = isValidApiRequest(...apiRequests)
    process.stdout.write(results.map(x => (x ? 'VALID' : 'INVALID')).join('\n'))
})

// --- SOLUTION BELOW --- //

function isValidApiRequest (...requests) {
    const validLanguages = [
        'C',
        'CPP',
        'JAVA',
        'PYTHON',
        'PERL',
        'PHP',
        'RUBY',
        'CSHARP',
        'HASKELL',
        'CLOJURE',
        'BASH',
        'SCALA',
        'ERLANG',
        'CLISP',
        'LUA',
        'BRAINFUCK',
        'JAVASCRIPT',
        'GO',
        'D',
        'OCAML',
        'R',
        'PASCAL',
        'SBCL',
        'DART',
        'GROOVY',
        'OBJECTIVEC',
    ]
    const regex = new RegExp(`^(${validLanguages.join('|')})$`)
    return requests.map(request => regex.test(request[1]))
}
