const OS = require("os");

let user = OS.userInfo()
console.log(user)

console.log(`The UP Time of system: ${OS.uptime()} sec
                        ${Math.floor(OS.uptime()/60)} hr`)

const currentOS = {
    name: OS.type(),
    version: OS.version(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem()
}

console.log(currentOS)

