function solution(t, p) {
    let array= [];
    const numbered_p = Number(p);
    for(i=0; i<=t.length-p.length; i++){
      array.push(t.slice(i,i+p.length))  
    }
    const numbered_array = array.map(Number);
    const filtered_array = numbered_array.filter((n)=>n<=numbered_p);
    const answer = filtered_array.length
    return answer
}

