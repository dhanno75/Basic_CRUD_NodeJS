const os = require("os");

// console.log(`free memory: ${os.freemem() / 1024 / 1024 / 1024}`);
// console.log(`Total memory: ${os.totalmem() / 1024 / 1024 / 1024}`);
console.log(`Version: ${os.version()}`);
console.log(`CPU: ${os.cpus()}`);
