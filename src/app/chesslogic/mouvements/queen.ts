import { inLine, isPinned } from "../check/pinnedpiece";
import { diagonalMove } from "./diagonal";
import { upDownLeftRight } from "./updownleftright";

function queenMove(board:any,position:number[],color:string,kingPosition:number[]):number[][]{
    let possiblemoves:number[][]=diagonalMove(board,color,position)
    possiblemoves=possiblemoves.concat(upDownLeftRight(board,color,position))
    let possibleCheck=isPinned(board,kingPosition,color,position)

   //current player's king position
   let xk=kingPosition[0]
   let yk=kingPosition[1]


   //filter possbile moves 
   if (possibleCheck) {
       let tpx=possibleCheck.at[0]
       let tpy=possibleCheck.at[1]

       
       let p=[]
       
       for( let [mx,my] of possiblemoves) {
           if (inLine(xk,yk,tpx,tpy,mx,my))
                p.push([mx,my])}
       return p
   }
    return possiblemoves
}

export {queenMove}