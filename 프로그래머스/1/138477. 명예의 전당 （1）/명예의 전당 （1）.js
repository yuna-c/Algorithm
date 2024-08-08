function solution(k, score) {
    let answer = []; // 최하점
    let award = [];  // 명예의 전당
    // for of
    for(let s of score){
        // console.log(`s번째 스코어의 값 : ${s}`); // [10, 100, 20, 150, 1, 100, 200]
        // console.log(`배열의 길이(idx) : ${award.length}`) // 0,1,2,3,4,5,6
        award.push(s);
        // console.log(award.sort((a,b)=> b-a)); // 내림차순 정렬
        award.sort((a,b)=> b-a);
        if(award.length === k+1){
            award.pop();
        }
        answer.push(award[award.length -1])
    }
    // console.log('사람수',k);
    // console.log('빈배열',answer);
    // console.log('최고 점수',score);
    // console.log('최고 점수의 길이',score.length);
    return answer;
}