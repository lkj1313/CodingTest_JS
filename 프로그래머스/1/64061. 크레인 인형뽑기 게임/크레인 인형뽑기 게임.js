function solution(board, moves) {
    let answer = 0;
    let stack = [];
    for(let j=0; j<moves.length; j++){
        const col = moves[j]-1
        for(let i=0; i<board.length; i++)
            
             if(board[i][col]){
                 if(stack[stack.length-1] ===board[i][col]){
                     stack.pop();
                     answer = answer+2;
                     board[i][col] =0;
                     break;
                 } else {
                     stack.push(board[i][col])
                     board[i][col] = 0;
                     break;
                 }
                 
             }
        }
    return answer;
    }
    
