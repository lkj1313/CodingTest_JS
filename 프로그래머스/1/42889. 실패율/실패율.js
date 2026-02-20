function solution(N, stages) {
    const answer = []
    for(let i=1; i<=N; i++){
        const length = stages.filter((n)=>n>=i).length;
        const arr = stages.filter((n)=>n===i).length;
        answer.push([i,arr/length])
    }
    answer.sort((a,b)=>b[1]-a[1]);
    const realAnswer = answer.map((a)=>a[0])
    return realAnswer;
}