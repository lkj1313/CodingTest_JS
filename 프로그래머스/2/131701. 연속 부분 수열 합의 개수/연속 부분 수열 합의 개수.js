const set = new Set();
function solution(elements) {
    const length = elements.length;
    var answer = 0;
    const arr = [...elements, ...elements]
    for(let i=1; i<=length; i++){
        window(arr,i);
    }
    return set.size;
}

function window(arr,l){ // l은 길이
    
    let tempSum = 0;
    for(let i=0; i<l ;i++){
        tempSum+= arr[i];
        set.add(tempSum);
    }
    
    for(let i=l;i<arr.length;i++){
        tempSum = tempSum + arr[i] - arr[i-l];
        set.add(tempSum);
    }
    
}