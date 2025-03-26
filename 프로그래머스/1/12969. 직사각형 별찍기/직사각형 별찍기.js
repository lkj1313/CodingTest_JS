process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ").map(Number);
    const row = '*'.repeat(a);
    let result = '';

    for (let i = 0; i < b; i++) {
        result += row + '\n';
    }

    console.log(result);
});
