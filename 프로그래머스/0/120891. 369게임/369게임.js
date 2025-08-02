function solution(order) {
    let answer = 0;
    const str = order.toString()
    for(let i = 0; i < str.length; i++){
        if(str[i] === '3' || str[i] ==='6' || str[i] === '9'){
            answer++
        }
        
    }
    return answer;
}