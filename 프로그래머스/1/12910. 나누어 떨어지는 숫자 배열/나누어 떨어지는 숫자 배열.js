function solution(arr, divisor) {
    let answer = [];
    arr.map(n => {
        n % divisor == 0 && answer.push(n);
    })
    return answer.length ? [-1] : answer.sort((a,b) => a - b) ;
}

function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) answer.push(arr[i]);
    }
    if(answer.length === 0) answer.push(-1);
    answer.sort((a,b) => a - b);
    return answer;
}


// 아래는 테스트 코드입니다.
console.log(solution([5, 15, 7, 55], 5));