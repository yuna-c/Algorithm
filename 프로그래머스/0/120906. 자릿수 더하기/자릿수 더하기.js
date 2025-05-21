function solution(n) {
    let answer = 0;
    // let answer = n.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    let str = n.toString();
    for(let i = 0; i < str.length; i++){
        answer += parseInt(str[i])
    }
    return answer;
}