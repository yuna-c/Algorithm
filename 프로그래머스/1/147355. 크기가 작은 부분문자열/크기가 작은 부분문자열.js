function solution(t, p) {
    let answer = 0;
    for(i = 0 ; i <= t.length - p.length; i++){
    t.slice(i,i+p.length) <= p ? answer++ : answer;
    }
    return answer;
}