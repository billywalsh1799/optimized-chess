function diagonalMove(board:any,color:string,position: number[]):number[][]{
    
    let [x,y]=position
    const possiblemoves:number[][]= []
    //upper left diagonal
    let i=-1;let j=-1 
    while ( x+i>=0 && y+j>=0) {
        if (!board[x+i][y+j].piece) possiblemoves.push([x+i,y+j]) 
        else if (board[x+i][y+j].piece.color!==color) {
            possiblemoves.push([x+i,j+y])
            break} 
        else break
        i--;j--
    }

    //lower left diagonal
    i=1;j=-1 
    while ( x+i<8 && y+j>=0) {
        if (!board[x+i][y+j].piece) possiblemoves.push([x+i,y+j]) 
        else if (board[x+i][y+j].piece.color!==color) {
            possiblemoves.push([x+i,j+y])
            break} 
        else break
        i++;j--
    }

    //upper right diagonal
    i=-1;j=1 
    while ( x+i>=0 && y+j<8) {
        if (!board[x+i][y+j].piece) possiblemoves.push([x+i,y+j]) 
        else if (board[x+i][y+j].piece.color!==color) {
            possiblemoves.push([x+i,j+y])
            break} 
        else break
        i--;j++
    }

    //lower right diagonal
    i=1;j=1 
    while ( x+i<8 && y+j<8) {
        if (!board[x+i][y+j].piece) possiblemoves.push([x+i,y+j]) 
        else if (board[x+i][y+j].piece.color!==color) {
            possiblemoves.push([x+i,j+y])
            break} 
        else break
        i++;j++
    }


    return possiblemoves
}

export {diagonalMove}