import { upDownLeftRight } from "./updownleftright";

function rookMove(board:any,position:number[],color:string):number[][]{
    return upDownLeftRight(board,color,position)
}

export {rookMove}