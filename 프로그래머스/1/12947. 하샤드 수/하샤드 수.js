function solution(x) {
    // let answer = true;
    let answer = (x+'').split('').map(Number).reduce((a,b) => a + b);
    
    console.log(typeof(x), x);
    console.log(typeof(answer), answer);
    
    return x % answer === 0;
}