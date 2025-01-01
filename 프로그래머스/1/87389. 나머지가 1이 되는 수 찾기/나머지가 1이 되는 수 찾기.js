function solution(n) {
    var answer = 0;
    let xCollection = []
    for(let i=1; i<=n; i++){
        if(n%i===1){
            xCollection.push(i)
        }
    }
    let xCollectionOrganize = xCollection.sort((a,b)=>a-b)
    answer =xCollectionOrganize[0]
    return answer;
}