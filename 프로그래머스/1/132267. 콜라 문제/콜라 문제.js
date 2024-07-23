function solution(a, b, n) {
    /*
    console.log(a); // a : 콜라를 받기 위해 마트에 주어야 하는 병 수
    console.log(b); // b : a개를 가져다 주면 마트가 주는 콜라 병 수
    console.log(n); // n : 상빈이가 가지고 있는 빈 병의 개수
    */
    // 상빈이의 빈 병의 개수(n)가 콜라를 받기 위해 마트에 주어야 하는 병 수(a) 보다 크면
    if(n < a){
    // 상빈이의 빈 병의 개수(n)가 콜라를 받기 위해 마트에 주어야 하는 병 수(a) 보다 작으면 return을 통해 종료
       return 0;
    } else {
        let sum = Math.floor(n / a) * b;
        // (상빈이의 빈 병 갯수 / 콜라를 받기 위해 마트에 줘야하는 병 수) * 마트가 주는 콜라 병수를 곱하여 반올림하라
        return sum + solution(a, b, n % a + sum);
        // 계산한 콜라의 개수를 재귀 함수를 통해 계속 누적해서 더해주되,
        // solution(a, b, n)에서 n의 자리에 n을 a로 나눈 나머지와 위에서 계산한 sum을 합산하여 파라미터로 전달
    }
}