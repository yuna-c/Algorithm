// function solution(array, n) {
//     let answer = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === n){
//             answer.push(array[i])
//         }
//     }
//     return answer.length;
// }

const solution = (array, n) => { 
    const newArr = array.filter((item)=> item ===n)
    return newArr.length
}