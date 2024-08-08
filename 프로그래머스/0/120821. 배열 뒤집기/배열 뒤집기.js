// solution 1 : for()/ push()
// function solution(num_list) {
//     let reverse = [];
//     for(let i = num_list.length -1; i >= 0; i--){
//         // 맨 앞에 null값이 존재하기 때문에 num_list.length -1을 해 null 삭제
//         reverse.push(num_list[i]);
//     }
//     return reverse;
// }

// solution 2 : reverse() 
const solution = (num_list) => num_list.reverse();

// solution 3 : reverse(), spead 깊은 복사(원본배열 살아 있음) 
// const solution = (num_list) => [...num_list].reverse();

// solution 4 : sort() 
// const solution = (num_list) => num_list.sort((a, b) => -1);