function solution(n)
{
    let answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log("Hello JavaScript");

    // return answer;
    return (n+"").split("").reduce((a,b) => a + parseInt(b), 0);
}

