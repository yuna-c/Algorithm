function solution(s) {
    let count = 0; // 나누는 횟수
    let same = 0;  // 같은 문자 개수
    let diff = 0;  // 현재 문자와 다른 개수
    let firstChar = s[0]; // 첫번째 문자
    
    for (let i = 0; i < s.length; i++){
        if(s[i] === firstChar) same++
        else diff++
        
        // 현재 문자와 다른 문자의 개수가 같아지면 분할
        if(same === diff){
            count++
            same = 0
            diff = 0
            firstChar = s[i + 1]
        }
    }
    // 마지막 부분 문자열이 남아 있을 경우
    if(same !== 0 || diff !== 0) count++
    return count;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3