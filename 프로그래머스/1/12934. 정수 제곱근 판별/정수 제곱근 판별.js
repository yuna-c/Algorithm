function solution(n) {
    let answer = 0;
    let math = Math.sqrt(n);
    
    if(math % 1 === 0){ answer += Math.pow(math+1,2); }
    else{ answer = -1; }
    
    console.log(answer);
    return answer;
}

