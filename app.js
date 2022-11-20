// npm -> Global Command, comes with node

// npm --version -> to get the version of node

// local dependency -> use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

const _ = require("lodash") // npm i lodash --> this module is installed by this command.

let a = [1,[2,[3,[4]]]]

let b= _.flattenDeep(a)

console.log(b)
