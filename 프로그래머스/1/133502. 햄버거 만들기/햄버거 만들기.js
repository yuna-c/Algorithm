function solution(ingredient) {
    let stack = []; 
    let answer = 0;
    
    for(let item of ingredient){
        stack.push(item);
        
    if (stack.slice(-4).join('') === '1231') {
        answer++;
        stack.splice(-4);
        }
    }
    
    return answer;
}