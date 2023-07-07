function inBoard(i:number,j:number): boolean{
    if(i<8 && i>-1 && j<8 &&j>-1) return true
    return false 
  }

function diagonalCheck (board:any,color:string,kingPos:number[]):boolean{
     //upper left diagonal
     let[x,y]=kingPos
     
     let i=-1;let j=-1 
     while ( x+i>=0 && y+j>=0) {
        
        if (board[x+i][y+j].piece ) {
            
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="bishop") 
                     {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                     return true}
                else {//console.log('no threat at ' ,x+i,y+j)
                      break }
                    }
                
                    else {//console.log('no threat at ' ,x+i,y+j)
                    break }}
            
        
        i--;j--}
     
 
     //lower left diagonal
     i=1;j=-1 
     while ( x+i<8 && y+j>=0) {
        if (board[x+i][y+j].piece) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="bishop") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true}
                else {//console.log('no threat at ' ,x+i,y+j)
                break } }
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        i++;j--
    }
     
 
     //upper right diagonal
     i=-1;j=1 
     while ( x+i>=0 && y+j<8) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="bishop") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        i--;j++
    
    }
     
 
     //lower right diagonal
     i=1;j=1 
     while ( x+i<8 && y+j<8) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="bishop") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true} 
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        i++;j++
     }
     return false 
    
}
function UpDownLeftRightCheck (board:any,color:string,kingPos:number[]):boolean{
    let[x,y]=kingPos
    
    //right
    let i=0,j=1 
    while (  y+j<8) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="rook") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true} 
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        j++
     }
    //left
    i=0,j=-1
    while (  y+j>=0) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="rook") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true} 
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        j--
     }
    //up
    i=-1,j=0 
    while ( x+i>=0) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="rook") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true} 
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        i--
     }
    //down
    i=1,j=0 
    while ( x+i<8) {
        if (board[x+i][y+j].piece ) {
            if(board[x+i][y+j].piece.color!==color) {
                if (board[x+i][y+j].piece.name==="queen" || board[x+i][y+j].piece.name==="rook") 
                {//console.log(board[x+i][y+j].piece,'danger at ',x+i,y+j)
                return true} 
                else {//console.log('no threat at ' ,x+i,y+j)
                break }}
                else {//console.log('no threat at ' ,x+i,y+j)
                break }} 
        i++
     }
    
    //Pawn check
    if (color=="white") {
        if (inBoard(x-1,y+1) && board[x-1][y+1].piece &&  board[x-1][y+1].piece.color=="black" && board[x-1][y+1].piece.name==="pawn") 
            {//console.log(board[x-1][y+1].piece,"danger at ",x-1,y+1)
            return true }
        if (inBoard(x-1,y-1) && board[x-1][y-1].piece &&  board[x-1][y-1].piece.color=="black" && board[x-1][y-1].piece.name==="pawn") 
            {//console.log(board[x-1][y-1].piece,"danger at ",x-1,y-1)
            return true } 
        }
    else {
        if (inBoard(x+1,y+1) && board[x+1][y+1].piece &&  board[x+1][y+1].piece.color=="white" && board[x+1][y+1].piece.name==="pawn") 
            {//console.log(board[x+1][y+1].piece,"danger at ",x+1,y+1)
            return true } 
        if (inBoard(x+1,y-1) && board[x+1][y-1].piece &&  board[x+1][y-1].piece.color=="white" && board[x+1][y-1].piece.name==="pawn") 
            {//console.log(board[x+1][y-1].piece,"danger at ",x+1,y-1)
            return true } 
    }

          

    //knight check 
    let l=[-2,-1,1,2]
    for (let k of l){
        let [p1,p2]=[[x+k,y+3-Math.abs(k)],[x+k,y-3+Math.abs(k)]]
        
            
        if(inBoard(p1[0],p1[1]) &&  board[p1[0]][p1[1]].piece && board[p1[0]][p1[1]].piece.color!==color && board[p1[0]][p1[1]].piece.name==="knight")
            return true
        if(inBoard(p2[0],p2[1]) &&  board[p2[0]][p2[1]].piece && board[p2[0]][p2[1]].piece.color!==color && board[p2[0]][p2[1]].piece.name==="knight" )
            return true
        
        }
 



    return false }
    export {UpDownLeftRightCheck,diagonalCheck}