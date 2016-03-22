#!/usr/bin/env node

'use strict'

const os = require('os')
const child_process = require('child_process')

const script_base_name = process.argv[2]

let target = 'posix'
if (os.type().indexOf('Windows') >= 0) {
    target = 'windows'
}
let script_name = `${script_base_name}:${target}`

try {
    child_process.execSync(`npm run ${script_name}`, {stdio: 'inherit'})
} catch (err) {
    console.error(err) // eslint-disable-line
    process.exit(1)
}
