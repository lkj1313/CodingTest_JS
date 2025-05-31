const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const T = parseInt(input[0]);
const students = [];

for (let i = 1; i <= T; i++) {
  const [name, kor, eng, math] = input[i].split(" ");
  students.push({
    name,
    kor: parseInt(kor),
    eng: parseInt(eng),
    math: parseInt(math),
  });
}

students.sort((a, b) => {
  if (a.kor !== b.kor) return b.kor - a.kor;
  if (a.eng !== b.eng) return a.eng - b.eng;
  if (a.math !== b.math) return b.math - a.math;
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

console.log(students.map((s) => s.name).join("\n"));
