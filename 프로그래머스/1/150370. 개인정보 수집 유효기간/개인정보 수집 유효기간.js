function solution(today, terms, privacies) {
    // 날짜를 일 단위로 변환하는 함수 
    const toDays = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        return year * 12 * 28 + month * 28 + day;
    }
    
    // today를 일 단위로 변환
    const todayDays = toDays(today);
    
    // 약관 종류에 따른 유효기간을 저장할 딕셔너리
    const termDict = {};
    terms.forEach((term)=>{
        const [key, value] = term.split(' ');
        termDict[key] = Number(value);
    })
    
    // 파기해야 할 개인정보 번호를 저장할 배열
    let result = [];
    
    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        // 수집된 날짜에 약관 유효기간을 더한 값
        const expireDays = toDays(date) + termDict[termType] * 28;
        // 유효기간이 지났으면 결과에 추가    
        if(expireDays <= todayDays) {
            result.push(index + 1)
        }
    })
    return result;
}
