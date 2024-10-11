function solution(survey, choices) {
    const scores = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };

    choices.forEach((choice, index) => {
        const [disagreeType, agreeType] = survey[index];
        
        // choice가 4보다 작으면 비동의 관련 유형에 점수를 추가
        if (choice < 4) {
            scores[disagreeType] += (4 - choice); // 비동의 관련 유형에 점수를 더함
        } 
        // choice가 4보다 크면 동의 관련 유형에 점수를 추가
        else if (choice > 4) {
            scores[agreeType] += (choice - 4); // 동의 관련 유형에 점수를 더함
        }
        // choice가 4면 모르겠음, 점수를 더하지 않음
    });

    const result = [
        scores.R >= scores.T ? 'R' : 'T',
        scores.C >= scores.F ? 'C' : 'F',
        scores.J >= scores.M ? 'J' : 'M',
        scores.A >= scores.N ? 'A' : 'N'
    ].join('');

    return result;
}
