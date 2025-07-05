// function solution(my_string, num1, num2) {
//     const str = my_string.split('');
//     const str1 = str[num1];
//     const str2 = str[num2];
    
//     str.splice(num2,1,str1);
//     str.splice(num1,1,str2);
//     return str.join('');
// }

function solution(my_string, num1, num2) {
  return my_string
    .split("") // 문자열 → 문자 배열로 변환
    .map((v, i) =>
      i === num1 ? my_string[num2]        // num1 자리에 num2 문자 넣기
      : i === num2 ? my_string[num1]      // num2 자리에 num1 문자 넣기
      : v                                 // 나머지는 그대로
    )
    .join(""); // 배열 → 다시 문자열로
}