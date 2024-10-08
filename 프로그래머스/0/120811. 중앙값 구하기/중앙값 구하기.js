function solution(array) {
  array.sort((a,b)=>a-b);
    const indexMiddle = Math.floor(array.length/2);
    return array[indexMiddle]
}
    