function solution(k, dungeons) {
  let maxCount = 0;
  const visited = new Array(dungeons.length).fill(false);

  function dfs(p, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [req, cost] = dungeons[i];

      if (!visited[i] && p >= req) {
        visited[i] = true;
        dfs(p - cost, count + 1);
        visited[i] = false; 
      }
    }
  }

  dfs(k, 0);
  return maxCount;
}