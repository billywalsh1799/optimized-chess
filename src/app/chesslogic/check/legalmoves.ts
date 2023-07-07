import { generateEmptySquare, generatePiece, possibleMoves } from "src/app/services/boardservice/boardmethods"
import { UpDownLeftRightCheck, diagonalCheck } from "./kingcheck"

function checkLegalMoves(board :any,kingPosition:number[]):any{
    let [xk,yk]=kingPosition
    let kingInCheck=board[xk][yk].inCapture
    let king=board[xk][yk].piece
    let color=king.color
    

    let legalMoves:any =[]
    let l:any
    for(let i=0;i<8;i++){
         
        l=[]
        for(let j=0;j<8;j++){
            if(board[i][j].piece && board[i][j].piece.color===color){

                let {name,color,position}=board[i][j].piece
                let possiblemoves=possibleMoves(name,position,color,board,kingPosition)
                if (kingInCheck){
                    let p=[]
                    for(let move of possiblemoves){
                        if(!escapeCheck(board,[i,j],move,color,kingPosition)) 
                            p.push(move)

                     }
                    
                    l.push(p)
                }

                else
                    l.push(possiblemoves)

            }

            else l.push([])


        }
        legalMoves.push(l)
    }
    
    return legalMoves
 }


function escapeCheck(board: any,from: number[],to: number[],color:string,kingPosition:number[]): boolean{
    let tempBoard=copyBoard(board)
    let [x,y]=from
    let [a,b]=to
    let {name,pcolor,position}=tempBoard[x][y].piece
    //tempBoard[x][y].piece.move(from,to,tempBoard,[],true)
    tempBoard[x][y]=generateEmptySquare()
    tempBoard[a][b]=generatePiece(name,pcolor,to)
    if (tempBoard[to[0]][to[1]].piece.name==='king') kingPosition=[to[0],to[1]]
    return diagonalCheck(tempBoard,color,kingPosition) || UpDownLeftRightCheck(tempBoard,color,kingPosition) 


}


function copyBoard(board: any):any{
    return [...board]

}

export{checkLegalMoves}