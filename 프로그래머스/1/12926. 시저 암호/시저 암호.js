function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return " "; // 공백은 그대로 유지
      const charCode = char.charCodeAt(0);

      // 대문자 처리
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((charCode - 65 + n) % 26) + 65);
      }

      // 소문자 처리
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(((charCode - 97 + n) % 26) + 97);
      }

      return char;
    })
    .join("");
}

console.log(solution("ABC", 3)); // "DEF"
console.log(solution("XYZ", 4)); // "BCD"
