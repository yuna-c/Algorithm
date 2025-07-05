function solution(my_string, num1, num2) {
    const str = my_string.split('');
    const str1 = str[num1];
    const str2 = str[num2];
    
    str.splice(num2,1,str1);
    str.splice(num1,1,str2);
    return str.join('');
}