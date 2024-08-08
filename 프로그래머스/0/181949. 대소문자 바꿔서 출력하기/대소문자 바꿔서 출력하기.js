const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 1 for
    // for (let i = 0; i < str.length; i++) {
    //     str[i] === str[i].toUpperCase() ? answer += str[i].toLowerCase() : answer += str[i].toUpperCase();
    // }
    
    // 2 for of
    // for(let s of str){
    //     s === s.toUpperCase() ? answer += s.toLowerCase() : answer += s.toUpperCase();
    // }
    
    // 3 map
    // [...str].map(s => s === s.toUpperCase() ? answer += s.toLowerCase() : answer += s.toUpperCase());
    // console.log(answer);
    
    // 4-1 forEach 변수 자체를 나눔 
    // str = input[0].split('');
    // str.forEach((s, i) => s === s.toUpperCase() ? str[i] = s.toLowerCase() : str[i] = s.toUpperCase());
    // console.log(str.join(''));
    
    // 4-2 forEach 배열로 만들어 push 
    let arr = [];
    str.split('').forEach((s) => arr.push(s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()));
    console.log(arr.join(''));
    
    // 5 reduce
    // const parse = str.split('').reduce((acc, curr)=> {
    //     return curr.toUpperCase() === curr ? acc + curr.toLowerCase() : acc + curr.toUpperCase();
    // }, '')
    // console.log(parse);

});
