function solution(numbers, direction) {
    let answer = []
    
    if(direction ==='right'){
        const after = numbers.pop()
        answer = [ after, ...numbers]
        console.log(answer)
    }
    else{
        const before = numbers.shift()
        answer = [...numbers, before]
        console.log(answer)
    }
    
    return answer
}