// function solution(array, height) {
//     let answer = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > height) {
//             answer++
//         }
//     }
//     return answer;
// }

function solution(array, height) {
    let answer = array.filter((el) => el > height).length;
    return answer;
}