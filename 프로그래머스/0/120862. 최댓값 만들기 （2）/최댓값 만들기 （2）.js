// function solution(numbers) {
//     let maxProduct = numbers[0] * numbers[1]; // 초기화

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             const product = numbers[i] * numbers[j];
//             if (product > maxProduct) {
//                 maxProduct = product;
//             }
//         }
//     }
//     return maxProduct;
// }

function solution(numbers) {
    const sortNum = numbers.sort((a,b)=> a-b);
    const min = sortNum[0] * sortNum[1]
    const max = sortNum[sortNum.length -1] * sortNum[sortNum.length -2] 
    return Math.max(min, max)
}