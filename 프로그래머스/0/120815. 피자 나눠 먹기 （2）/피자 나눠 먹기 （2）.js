function solution(n) {
    // 배수 10 => 30(안 남겨야 함) 4 => 12 3쪽 i <= ; 이렇게 하면 배수 찾을때까지만
    for(let i = 1; i <= 100; i++){
       if((6 * i) % n === 0){
           return i
       }
    }
}