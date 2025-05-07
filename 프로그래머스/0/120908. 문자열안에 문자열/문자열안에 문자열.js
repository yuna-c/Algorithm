// function solution(str1, str2) {
//     let answer = 0;
//     for(let i = 0; i < str1.length; i++){
//         if(str1.includes(str2)) answer = 1
//         else answer = 2
//     }
//     return answer;
// }

// function solution(str1, str2) {
//     let answer = str1.includes(str2) ? 1 : 2;
//     return answer;
// }

const solution = (str1, str2) => str1.includes(str2) ? 1 : 2