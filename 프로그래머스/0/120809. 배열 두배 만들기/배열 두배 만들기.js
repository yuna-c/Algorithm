// function solution(numbers) {
//     let answer = [];
//     for(let i = 0; i < numbers.length; i++){
//         answer.push(numbers[i] * 2)
//     }
//     return answer;
// }

// const solution = (numbers) => numbers.map((n)=> n * 2)
// const solution = (numbers) => numbers.reduce((acc, cur) => [...acc, cur * 2], []) // 시간 복잡도 
const solution = (numbers) => numbers.reduce((acc, cur) => { // 순수 X
    acc.push(cur * 2); 
    return acc; 
}, [])