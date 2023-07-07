function inLine(xk:number,yk:number,tpx:number,tpy:number,mx:number,my:number){

    if(yk===tpy && my===yk){
      let maxx =Math.max(xk,tpx)
      let minx =Math.min(xk,tpx)
      if (mx>=minx && mx<=maxx) return true


    }

    else if(xk===tpx && mx===xk){
      let maxy =Math.max(yk,tpy)
      let miny =Math.min(yk,tpy)
      if (my>=miny && my<=maxy) return true 

    } 
    
      let a=(xk-tpx)/(yk-tpy)
      let b=yk-xk*a
      let maxx =Math.max(xk,tpx)
      let minx =Math.min(xk,tpx)
      let maxy =Math.max(yk,tpy)
      let miny =Math.min(yk,tpy)
      if (mx*a+b==my && mx>=minx && mx<=maxx && my<=maxy && my>=miny) return true

    
    
    return false 
}

function isPinned(board:any,kingPosition: number[],color:string,position:number[]):any{
    //position of piece to move
    let [x,y]=position

    //current player's king position
    let [xk,yk]=kingPosition

    //check direction
    let xinc,yinc

    //vertical direction
    if (x===xk){
      xinc=0
      yinc=(y-yk)/Math.abs(y-yk)
    } 
    //horizental direction 
     else if (y===yk){
      xinc=(x-xk)/Math.abs(x-xk)
      yinc=0
      
    } 

    //diagonal direction
     else{
      xinc=(x-xk)/Math.abs(x-xk)
      yinc=(y-yk)/Math.abs(y-yk)
    } 

    
    let type
    if (xinc===0 || yinc===0) 
        type ="rook"
    else type="bishop"
    //check threats
    let i=xinc
    let j=yinc
    while ( (xk+i<8 && yk+j<8) && (xk+i>=0 && yk+j>=0)){
      //console.log("xxxxxxxxxxx",x+i,x,xk,i)
      //console.log("ppppppppp",board[x+i][y+j])

      /* console.log("test",xk+i,yk+j) */
      if (board[xk+i][yk+j].piece) {

        if(board[xk+i][yk+j].piece.color!==color) {
            if (board[xk+i][yk+j].piece.name==="queen" || board[xk+i][yk+j].piece.name===type ){
                //console.log('danger at ',xk+i,yk+j)
                 return {threat:true,at:[xk+i,yk+j]}
              } 
            else {
                  // console.log('no threat at ' ,xk+i,yk+j)
                  break 
                }
            }
        else {
          if(xk+i !== x || yk+j!==y){
            //console.log('no threat at ' ,xk+i,yk+j)
            break 
          }
          
        }
      } 
    i+=xinc;j+=yinc

    }

    return false
  }

export {inLine,isPinned}