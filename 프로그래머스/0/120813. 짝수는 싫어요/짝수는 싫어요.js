// function solution(n) {
//     let answer = [];
//     for(let i = 0; i <= n; i++){
//         if(i % 2 === 1){
//             answer.push(i)
//         }
//     }
//     return answer;
// }

// 길이가 n인 배열
const solution = (n) => Array.from({length: n}, (_, i) => i + 1).filter(num => num % 2 === 1)