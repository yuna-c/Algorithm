function solution(s, n) {
    // var answer = '';
    console.log(typeof n);
    console.log(typeof s);
    
    // return answer;
    
      return [...s].map((al) => {
      if (al === " ") return " ";
      const code = al.charCodeAt(0);
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");

}