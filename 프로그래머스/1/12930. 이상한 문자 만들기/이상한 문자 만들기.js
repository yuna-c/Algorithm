// function solution(s) {
//     return s.split(" ")
//         .map((w) => 
//             w.split("")
//             .map((num,idx) => (idx % 2 === 0 ? num.toUpperCase() : num.toLowerCase()))
//         .join("")
//     )
//     .join(" ");
// }

// function solution(s) {
//     const txt = s.split(" ");
//     const newTxt = txt.map(function(n){
//         console.log(`배열 쪼개기` + n);
//         let tmp = "";
//         n.split("").map(function(num,idx){
//             idx % 2 === 0 ? tmp += num.toUpperCase() : tmp += num.toLowerCase();
//             console.log(`글자반복` + num, `순서` + idx);
//             console.log(`3: ` + tmp);
            
//         }).join("");
//         return tmp;
//     })
    
//     const answer = newTxt.join(" ");
//     console.log(`4: ` + answer);
//     return answer; 
// }

function solution(s) {
    const txt = s.split(" ");
    const newTxt = txt.map(function(n){
        let tmp = "";
        n.split("").map(function(num,idx){
            idx % 2 === 0 ? tmp += num.toUpperCase() : tmp += num.toLowerCase();
        }).join("");
        return tmp;
    })
    
    return answer = newTxt.join(" ");
}
