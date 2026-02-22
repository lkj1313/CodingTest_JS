function solution(want, number, discount) {
  const wantMap = new Map();
  let count = 0;

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i <= discount.length - 10; i++) { // <= 로 수정
    let flag = true;
    const discountedArr = discount.slice(i, i + 10);
    const discountedMap = new Map();

    for (let j = 0; j < 10; j++) {
      const item = discountedArr[j];
      discountedMap.set(item, (discountedMap.get(item) || 0) + 1); // 수정
    }

    for (const [key, value] of wantMap.entries()) {
      if ((discountedMap.get(key) || 0) < value) { // 안전하게
        flag = false;
        break;
      }
    }

    if (flag) count++;
  }

  return count;
}