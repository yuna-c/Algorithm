function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = [];
    
    for(let i = 0;i < s.length; i++){
        if(lower.indexOf(s[i]) !== -1){
            answer.push(lower[(lower.indexOf(s[i]) + n) % 26]);
        }   
        if(upper.indexOf(s[i]) !== -1){
            answer.push(upper[(upper.indexOf(s[i]) + n) % 26]);
        }
        if(s[i] === " "){
            answer.push(" ");
        }
    }
    return answer.join('');
}
