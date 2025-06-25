// function solution(my_string) {
//     let answer = 0;
//     for(let char of my_string){
//         if(!isNaN(char) && char !== ''){
//             answer += Number(char)
//         }
//     }
//     return answer;
// }

const solution = (my_string) => my_string.split('').filter((v)=> !isNaN(v)).map(Number).reduce((acc, cur) => acc + cur, 0)
