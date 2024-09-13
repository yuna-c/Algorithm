function solution(n, lost, reserve) {
    let 도난노여분 = lost.filter(분실 => !reserve.includes(분실)).sort((a, b) => a - b);
    let 노도난여분 = reserve.filter(여분 => !lost.includes(여분)).sort((a, b) => a - b);
    
    let 답 = n - 도난노여분.length;

    for (let i = 0; i < 도난노여분.length; i++) {
        let 분실번호 = 도난노여분[i];
      
        for (let j = 0; j < 노도난여분.length; j++) {
            let 여분번호 = 노도난여분[j];
            if (여분번호 === 분실번호 - 1 || 여분번호 === 분실번호 + 1) {
                답 += 1;
                // 빌려준 후 다시 사용되지 않도록 처리
                노도난여분[j] = -1;
                break; 
            }
        }
    }

    return 답;
}

// 테스트 케이스
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
