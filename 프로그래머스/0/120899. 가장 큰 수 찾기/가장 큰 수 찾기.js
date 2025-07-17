// function solution(array) {
//     let max = array[0]
//     let index = 0
    
//     for(let i = 1; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i] // 더 큰 수 찾으면 갱신
//             index = i // 인덱스도 갱신
//         }
//     }
    
//     return [max,index];
// }

function solution(array) {
   const max = Math.max(...array) // 배열에서 가장 큰 수를 찾음
   const index = array.indexOf(max) // 그 수의 인덱스를 찾음
    
    return [max,index];
}