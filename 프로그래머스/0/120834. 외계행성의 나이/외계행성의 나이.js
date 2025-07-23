// function solution(age) {
//     const alpha = ['a','b','c','d','e','f','g','h','i','j']
//     // 숫자는 공백이 없어
//     const result = age.toString().split('').map((n)=> alpha[n]).join('')
//     console.log(result)
//     return result;
// }

function solution(age) {
    const alpha = ['a','b','c','d','e','f','g','h','i','j']
    let result = '' // 변수 담을 공간은 let
    age = age.toString()
    
    for(let i = 0; i < age.length; i++){
       result += alpha[age[i]]
    }
    return result;
}