function solution(n, m) {
    //gcd 최대 공약수, lcm 최소 공배수
    let answer = [];
    const gcd = (a, b) => { 
        return b == 0 ? a : gcd(b, a % b); // 나누어지면 a 리턴 : 나누어지지 않는다면 b와 a%b를 다시 나눈다
    }
    const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
    
    console.log(`최대 공약수는? ${gcd(n, m)}, 최대 공배수는? ${lcm(n, m)}`);
    
    return [gcd(n, m), lcm(n, m)];
}

console.log(solution(30, 72));