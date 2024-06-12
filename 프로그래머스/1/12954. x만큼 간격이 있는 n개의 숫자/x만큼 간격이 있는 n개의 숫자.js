// var vegetables = ["설탕당근", "감자"];
// var moreVegs = ["셀러리", "홍당무"];

// // 첫번째 배열에 두번째 배열을 합친다.
// // vegetables.push('셀러리', '홍당무'); 하는 것과 동일하다.
// Array.prototype.push.apply(vegetables, moreVegs);

// console.log(vegetables); // ['설탕당근', '감자', '셀러리', '홍당무']

function solution(x, n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        answer.push(i*x);
        // console.log(answer);
    }
    return answer;
}