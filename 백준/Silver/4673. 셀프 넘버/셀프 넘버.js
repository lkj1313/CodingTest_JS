function dn(n) {
  return (
    n +
    String(n)
      .split("")
      .reduce((sum, splited) => sum + Number(splited), 0)
  );
}
const generated = new Set();
for (i = 0; i <= 10000; i++) {
  generated.add(dn(i));
}

for (i = 0; i <= 10000; i++) {
  if (!generated.has(i)) {
    console.log(i);
  }
}
