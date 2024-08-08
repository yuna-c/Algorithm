function solution(k, score) {
  let answer = [],
      award = [];
    
  // score 전체를 탐색하면서 
  for (const s of score) {
    // award에 score을 push하고 오름차순으로 정렬
    award.push(s);
    award.sort((a, b) => a - b);
    // award의 길이가 k보다 커지면 제일 작은 원소인 맨 앞의 원소를 shift로 제거
    if (award.length > k) award.shift();
    // 제일 첫번째 원소를 넣는다
    answer.push(award[0])
  }
  return answer
}