const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i];
        newStr === newStr.toUpperCase() ? answer += newStr.toLowerCase() : answer += newStr.toUpperCase();
    }
    console.log(answer);
});
