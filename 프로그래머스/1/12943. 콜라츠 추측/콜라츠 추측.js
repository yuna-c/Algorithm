function solution(num) {
    let answer = 0;
    // 500번 반복문
    for(let i = 0; i < 500; i++) {
        // num이 1이 아닐 때 삼항연산자 계산
        if(num != 1) {
            num = num % 2 == 0 ? num / 2 : (num * 3) + 1;
        } else {
            // 아니면 1이니까 i를 바로 리턴
            return answer = i;
        }
    }
    // 반복문이 모두 돌 때까지 1이 안나오면 -1을 리턴
    return answer = -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

