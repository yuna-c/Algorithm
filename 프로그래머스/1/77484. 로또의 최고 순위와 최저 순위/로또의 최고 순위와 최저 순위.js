    // 최저 순위
    // 최고 순위
    // 알아볼 수 없는 0의 개수(내로또)
    // 6개 맞았을 때(당첨로또=> 내로또 filter)
    // 배열에 담기
    // console.log(answer, lottos, win_nums)

function solution(lottos, win_nums) {
    let answer = [];
    
    const zeroNumber = lottos.filter((num) => 0 === num).length;
    const currentNumber = win_nums.filter((num)=> lottos.includes(num)).length;
    
    let maxCurrentNumber = zeroNumber + currentNumber;
    // 최고 등수 : 당첨 확률이 0보다 클 때 ? 1개 이상 맞춤 : 0개 맞춤 
    maxCurrentNumber > 0 ? answer.push(7 - maxCurrentNumber) : answer.push(6)
    // 최저 등수 : 당첨 확률이 0보다 클 때 ? 1개 이상 맞춤 : 0개 맞춤 
    currentNumber > 0 ? answer.push(7 - currentNumber) : answer.push(6)  
    return answer;
}