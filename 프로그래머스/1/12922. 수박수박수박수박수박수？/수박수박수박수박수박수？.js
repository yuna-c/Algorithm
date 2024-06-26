function solution(n) {
    let answer = "";
    for(let i = 0; i < n; i++){
        if(i % 2 === 0){ answer += "수" }
        else{ answer += "박" }
    }
    return answer;
    // return "수박".repeat(n).substring(0,n);
    // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
    // return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}