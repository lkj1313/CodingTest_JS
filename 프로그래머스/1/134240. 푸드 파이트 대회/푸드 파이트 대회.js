function solution(food) {
   let left = ''
   for(i=1; i<food.length ;i++){
       const count = Math.floor(food[i]/2);
       left+=String(i).repeat(count)
  }
    return left + '0' + [...left].reverse().join('')
}