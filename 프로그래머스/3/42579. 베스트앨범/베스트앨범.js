function solution(genres, plays) {

    const genresSum = new Map();
    for (let i = 0; i < genres.length; i++) {
        genresSum.set(genres[i], (genresSum.get(genres[i]) || 0) + plays[i]);
    }

   
    const songs = genres.map((gen, i) => [gen, plays[i], i]);

   
    songs.sort((a, b) => {
        
        if (a[0] !== b[0]) {
            return genresSum.get(b[0]) - genresSum.get(a[0]);
        }
    
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }
        
        return a[2] - b[2];
    });

  
    const result = [];
    const countMap = new Map();

    for (const [genre, play, index] of songs) {
        const count = countMap.get(genre) || 0;
        if (count < 2) {
            result.push(index);
            countMap.set(genre, count + 1);
        }
    }

    return result;
}