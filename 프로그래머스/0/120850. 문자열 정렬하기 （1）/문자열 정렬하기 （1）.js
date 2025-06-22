// function solution(my_string) {
//     let answer = [];
//     for(let i = 0; i < my_string.length; i++){
//       let num = my_string[i]
//       if(!isNaN(num)){
//           answer.push(Number(num))
//       }
//     }
//     answer.sort((a,b)=> a-b)
//     return answer;
// }

const solution = (my_string) => my_string
.split('')
.filter((n)=> !isNaN(n)) // 숫자이면 true
.map((n)=> n * 1) // 문자열을 숫자로 변환하는 트릭
.sort((a, b)=> a - b)
 