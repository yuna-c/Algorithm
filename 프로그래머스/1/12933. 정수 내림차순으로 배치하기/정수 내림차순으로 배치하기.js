function solution(n) {
//     return parseInt((n+"").split("").sort().reverse().join(""));
//     let answer = (n+"").split("").sort().reverse().join("");
//     console.log(typeof(answer), answer);
    
//     return parseInt(answer);
    
    let answer = parseInt((n+"").split("").sort().reverse().join(""));
    console.log(typeof(answer), answer);
    
    return answer;
}