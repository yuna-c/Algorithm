function solution(age) {
    const alpha = ['a','b','c','d','e','f','g','h','i','j']
    // 숫자는 공백이 없어
    const result = age.toString().split('').map((n)=> alpha[n]).join('')
    console.log(result)
    return result;
}