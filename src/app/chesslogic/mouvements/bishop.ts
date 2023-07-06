import { diagonalMove } from "./diagonal";

function bishopMove(board:any,position:number[],color:string):number[][]{
    return diagonalMove(board,color,position)
}


export {bishopMove}