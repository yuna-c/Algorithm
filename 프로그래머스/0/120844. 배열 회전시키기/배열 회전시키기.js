function solution(numbers, direction) {
    if(direction ==='right'){
        const last = numbers.pop() // 뒤 제거
        numbers.unshift(last) // 앞 추가
    }
    else{
        const first = numbers.shift() // 앞 제거
        numbers.push(first) // 뒤 추가
    }
    
    return numbers
}


// function solution(numbers, direction) {
//     let answer = []
    
//     if(direction ==='right'){
//         const after = numbers.pop() // 뒤 제거
//         answer = [ after, ...numbers]
//     }
//     else{
//         const before = numbers.shift() // 앞 제거
//         answer = [...numbers, before]
//     }
    
//     return answer
// }

