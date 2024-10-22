function solution(s) {
  const array = s
    .split(" ") // [try , hello , world]
    .map((char, index) =>
      char
        .split("") // [t,r,y]
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ) //[T,r,Y]
        .join("") //TrY
    )   // [TrY, ]
    .join(" ");
  return array;
}
