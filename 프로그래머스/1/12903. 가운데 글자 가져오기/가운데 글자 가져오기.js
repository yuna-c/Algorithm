function solution(s) {
    // let answer = '';
    // return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
    const answer = Math.floor(s.length/2);
    return s.length % 2 === 1 ? s[answer] : s[answer-1]+s[answer];

}