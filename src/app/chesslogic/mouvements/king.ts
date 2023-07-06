function inBoard(i:number,j:number): boolean{
    if(i<8 && i>-1 && j<8 &&j>-1) return true
    return false 
}

function kingMove(board:any,position:number[],color:string):number[][]{

    let [x,y]=position
    const possiblemoves:number[][]= []
    //normal moves
    for(let i=-1 ;i<2;i++){
        for(let j=-1;j<2;j++){ 
            if(inBoard(x+i,y+j)) {
                if( !board[x+i][y+j].piece || board[x+i][y+j].piece.color!==color ){
                    //verify check positions
                    possiblemoves.push([x+i,y+j])   
                }
                
            }
        }
    }

    return possiblemoves
}

export {kingMove}