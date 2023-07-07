import { inLine, isPinned } from "../check/pinnedpiece";

function inBoard(i:number,j:number): boolean{
    if(i<8 && i>-1 && j<8 &&j>-1) return true
    return false 
}

function knightMove(board:any,position:number[],color:string,kingPosition:number[]):number[][]{
    let [x,y]=position;
    const possiblemoves:number[][]= []
    let l=[-2,-1,1,2]
    for (let k of l){
        let [p1,p2]=[[x+k,y+3-Math.abs(k)],[x+k,y-3+Math.abs(k)]]
        if(inBoard(p1[0],p1[1]) &&  !board[p1[0]][p1[1]].piece)
            possiblemoves.push(p1)
        else if(inBoard(p1[0],p1[1]) &&  board[p1[0]][p1[1]].piece && board[p1[0]][p1[1]].piece.color!==color)
            possiblemoves.push(p1)

        if(inBoard(p2[0],p2[1]) &&  !board[p2[0]][p2[1]].piece)
            possiblemoves.push(p2)
        else if(inBoard(p2[0],p2[1]) &&  board[p2[0]][p2[1]].piece && board[p2[0]][p2[1]].piece.color!==color)
            possiblemoves.push(p2)
             
    }

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

export{knightMove}