function inBoard(i:number,j:number): boolean{
    if(i<8 && i>-1 && j<8 &&j>-1) return true
    return false 
}


function pawnMove(board:any,position:number[],color:string):number[][]{
    let [x,y]=position;
    const possiblemoves:number[][]= []
    if (color ==='black'){
        //one square move
        if (inBoard(x+1,y) && !board[x+1][y].piece)   
        {possiblemoves.push([x+1,y])
        
        //two square move
        if (x==1  && !board[x+2][y].piece&& !board[x+1][y].piece)
        possiblemoves.push([x+2,y])}
        
        //lower right diagonal capture
        if(inBoard(x+1,y+1) && board[x+1][y+1].piece && board[x+1][y+1].piece.color==="white" ) 
        possiblemoves.push([x+1,y+1])
        
        //lower left diagonal capture
        if(inBoard(x+1,y-1) && board[x+1][y-1].piece && board[x+1][y-1].piece.color==="white" )
        possiblemoves.push([x+1,y-1]) 

    }

    else{

        //one square move
        if (inBoard(x-1,y) && !board[x-1][y].piece)   
            possiblemoves.push([x-1,y])
        
        //two square move
        if (x==6  && !board[x-2][y].piece&& !board[x-1][y].piece)
            possiblemoves.push([x-2,y])
        
        //upper right diagonal capture
        if(inBoard(x-1,y+1) && board[x-1][y+1].piece && board[x-1][y+1].piece.color==="black" ) 
            possiblemoves.push([x-1,y+1])

        //upper left diagonal capture
        if(inBoard(x-1,y-1) && board[x-1][y-1].piece && board[x-1][y-1].piece.color==="black" )
            possiblemoves.push([x-1,y-1]) 
       
    }

    return possiblemoves
}

export {pawnMove}