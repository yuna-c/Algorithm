const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // console.log(str.repeat(n));
    for (i = 0; i < n; i++){
        process.stdout.write(str); // 개행을 하지 않는 출력 메소드
    };
  
});