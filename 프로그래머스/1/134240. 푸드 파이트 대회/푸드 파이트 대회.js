function solution(food) {
    let answer = '';
    // [1(물), 3, 4, 6] 0[i]은 물 
    // console.log(food); 숫자 확인
    
    // 반복 돌리기(for, map, reduce)
    // String(n)명시적 형변환,(n+"")암시적 형변환
    // repeat(); '문자열'을 주어진 횟수만큼 반복해 붙임 
    // reverse(); 뒤집기
    // join(); 합치기
    // food 선
    let foods = food.map((e,i) => {
        if(e > 1){ // 물은 빼야 하기 때문에 물이 1보다 작은 경우의 조건으로 필터링
            answer += (i+'').repeat(e / 2); 
        }
    });
    return answer = `${foods}0${[...foods].reverse().join("")}`;
    // [...answer] 스프레드 연산자를 통해 얕은 복사(원본 안 건들게) 후 진행
}
console.log(solution([1,3,4,6]));
console.log(solution([1,7,1,2]));