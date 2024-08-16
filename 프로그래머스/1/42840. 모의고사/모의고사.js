function solution(answers) {
    // 각 수포자의 패턴
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    // 수포자의 답을 저장할 빈 배열
    const scores = [0,0,0]
    
    // 정답과 패턴 비교하여 점수 계산
    answers.forEach((answer, idx) => {
        patterns.forEach((pattern, index) => {
          if(answer === pattern[idx % pattern.length]){
              scores[index]++;
          }
        });
    })
    
    // 가장 높은 점수 찾기
    const maxScore = Math.max(...scores);
    
    // 가장 높은 점수를 받은 수포자의 번호를 반환
    return scores.map((score, i) => score === maxScore ? i + 1 : null).filter(val => val !== null);
}