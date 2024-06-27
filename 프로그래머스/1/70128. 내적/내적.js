function solution(a, b) {
    // let answer = 0;
    // return answer;
    
    return a.reduce((acc,cur,i) => acc += a[i] * b[i], 0);
}