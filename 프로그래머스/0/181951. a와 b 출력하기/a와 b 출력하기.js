const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    
    const [a, b] = line.split(' ');
    console.log('a =', a);
    console.log('b =', b);
}).on('close', function () {
    // console.log(Number(input[0]) + Number(input[1]));
    // console.log(`a = ` + Number(input[0]) + `\n` +  `b = ` + Number(input[1]));
});