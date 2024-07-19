const solution = (s) => 
    //console.log([...s]); // [ 'b', 'a', 'n', 'a', 'n', 'a' ]
    [...s].map((char, i) => { 
    // spread operator(스프레드 연산자)를 통해 기존 문자열을 복사한 후 map으로 반복을 돌린다.
    //console.log(`map : ${i} ` + char ); 
    /*  순번, 글자 확인한다.
    	[ 'f', 'o', 'o', 'b', 'a', 'r' ]
        map : 0 f
        map : 1 o
        map : 2 o
        map : 3 b
        map : 4 a
        map : 5 r
    */
    const count = s.slice(0, i).lastIndexOf(char);
    // s를 첫 글자부터 i번째까지 자른다음 char의 글자를 끝에서 부터 검색한다.
    return count < 0 ? count : i - count;
    // count가 0보다 크면 count를 반환하고 아니면 순서에서 count를 뺀값을 내보낸다
    });
