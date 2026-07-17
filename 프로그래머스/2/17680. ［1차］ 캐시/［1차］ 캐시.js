function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    const cache = new Set();
    let time = 0;
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        if (cache.has(city)) {
            time += 1;
            cache.delete(city);
            cache.add(city);
        } else {
            time += 5;
            if (cache.size === cacheSize) {
                const oldest = cache.values().next().value;
                cache.delete(oldest);
            }
            cache.add(city);
        }
    }
    
    return time;
}