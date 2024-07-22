process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); // data를 "" 기준으로 나눈다
    const a = Number(n[0]), 
          b = Number(n[1]);
    // console.log(a); 5
    // console.log(b); 3
    console.log(('*'.repeat(a) + '\n').repeat(b)); 
    // *을 a의 갯수만큼 반복하고, '\enter' 처리 한후, 다시 b갯수 만큼 반복한다
});