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

