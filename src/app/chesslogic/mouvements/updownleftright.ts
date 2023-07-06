function upDownLeftRight(board:any,color:string,position: number[]):number[][]{
    
    let [x,y]=position;
    const possiblemoves:number[][]= []
    //right
    let i=0,j=1 
    while (  y+j<8) {
        if (!board[x][y+j].piece) possiblemoves.push([x,y+j]) 
        else if (board[x][y+j].piece.color!==color) {
            possiblemoves.push([x,j+y])
            break} 
        else break
        j++
    }
    //left
    i=0,j=-1
    while (  y+j>=0) {
        if (!board[x][y+j].piece) possiblemoves.push([x,y+j]) 
        else if (board[x][y+j].piece.color!==color) {
            possiblemoves.push([x,j+y])
            break} 
        else break
        j--
    }
    //up
    i=-1,j=0 
    while ( x+i>=0) {
        if (!board[x+i][y].piece) possiblemoves.push([x+i,y]) 
        else if (board[x+i][y].piece.color!==color) {
            possiblemoves.push([x+i,y])
            break} 
        else break
        i--
    }
    //down
    i=1,j=0 
    while ( x+i<8) {
        if (!board[x+i][y].piece) possiblemoves.push([x+i,y]) 
        else if (board[x+i][y].piece.color!==color) {
            possiblemoves.push([x+i,y])
            break} 
        else break
        i++
    }

    return possiblemoves
}


export {upDownLeftRight}