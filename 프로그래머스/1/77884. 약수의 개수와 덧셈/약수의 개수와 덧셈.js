function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++){ // left를 i부터 시작하여 right까지 반복을 돌려서
        let count = 0; // 약수의 갯수 i를 저장할 count 값을 초기화 해 놓는다.
        for(let j = 1; j <= i; j++){ // j로 반복을 돌려 약수 구하기 
            if(i % j === 0){ // i가 j로 나누어 떨어지면 약수
                count++;  // i를 증감시켜라
            }
        }
        count % 2 === 0 ? answer += i : answer -= i;
        // 약수의 개수가 짝수면 더하고 홀수면 빼기
    }
    return answer;
}
console.log(solution(13, 17));
console.log(solution(24, 27));