import { diagonalMove } from "./diagonal";
import { upDownLeftRight } from "./updownleftright";

function queenMove(board:any,position:number[],color:string):number[][]{
    let possiblemoves:number[][]=diagonalMove(board,color,position)
    possiblemoves=possiblemoves.concat(upDownLeftRight(board,color,position))
    return possiblemoves
}

export {queenMove}