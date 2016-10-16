#!/usr/bin/env node

'use strict'

const os = require('os')
const child_process = require('child_process')

let script_name = process.argv[2]

if (os.type().indexOf('Windows') >= 0) {
    script_name = `${script_name}:windows`
}

try {
    // Legitimate ESLint exception, because the script caller awaits the return
    // value (either success or failure) of the execution.
    /* eslint no-sync: 0 */
    child_process.execSync(`npm run ${script_name}`, {stdio: 'inherit'})
} catch (err) {
    console.error(err) // eslint-disable-line
    process.exit(1)
}
