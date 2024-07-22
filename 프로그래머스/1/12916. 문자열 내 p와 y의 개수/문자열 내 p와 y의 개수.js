function solution(s){
    let p = 0 , 
        y = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p'|| s[i] === 'P') p++;
        if(s[i] ==='y' || s[i] === "Y") y++;
    }
    return p === y ? true : false;
}
// function solution(s){
//     return s.match(/p/ig).length == s.match(/y/ig).length;
//     // g :Global 의 표현하며 대상 문자열내에 모든 패턴들을 검색하는 것
//     // i :Ignore case 를 표현하며 대상 문자열에 대해서 대/소문자를 식별하지 않는 것
// }
console.log(solution('pPoooyY'));
console.log(solution('Pyy'));