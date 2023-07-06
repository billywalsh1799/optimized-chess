import { bishopMove } from "src/app/chesslogic/mouvements/bishop";
import { knightMove } from "src/app/chesslogic/mouvements/knight";
import { pawnMove } from "src/app/chesslogic/mouvements/pawn";

function createBoard(board:any) :void {
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = {piece:null,inCapture:false,possibleMove:false,isSelected:false};
      }
    }

    for(let j=0;j<8;j++){
      board[1][j] ={piece:{name:"pawn",color:"black",position:[1,j]},inCapture:false,possibleMove:false,isSelected:false}
    }
    
      for(let j=0;j<8;j++){
        board[6][j] ={piece:{name:"pawn",color:"white",position:[6,j]},inCapture:false,possibleMove:false,isSelected:false}
    }
      
      
      board[0][0]={piece:{name:"rook",color:"black",position:[0,0]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][1]={piece:{name:"knight",color:"black",position:[0,1]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][2]={piece:{name:"bishop",color:"black",position:[0,2]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][3]={piece:{name:"queen",color:"black",position:[0,3]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][4]={piece:{name:"king",color:"black",position:[0,4]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][5]={piece:{name:"bishop",color:"black",position:[0,5]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][6]={piece:{name:"knight",color:"black",position:[0,6]},inCapture:false,possibleMove:false,isSelected:false}
      board[0][7]={piece:{name:"rook",color:"black",position:[0,7]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][0]={piece:{name:"rook",color:"white",position:[7,0]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][1]={piece:{name:"knight",color:"white",position:[7,1]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][2]={piece:{name:"bishop",color:"white",position:[7,2]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][3]={piece:{name:"queen",color:"white",position:[7,3]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][4]={piece:{name:"king",color:"white",position:[7,4]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][5]={piece:{name:"bishop",color:"white",position:[7,5]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][6]={piece:{name:"knight",color:"white",position:[7,6]},inCapture:false,possibleMove:false,isSelected:false}
      board[7][7]={piece:{name:"rook",color:"white",position:[7,7]},inCapture:false,possibleMove:false,isSelected:false}
      
  }

  function showPossibleMoves(possiblemoves:number[][],board:any):void{
    for(let move of possiblemoves){
      let [a,b]=move
      if(board[a][b].piece)
        board[a][b].inCapture=true
      else
        board[a][b].possibleMove=true
  }
  }

function cleanUp(possiblemoves:number[][],board:any):void{
    for(let move of possiblemoves){
      let [a,b]=move
      if(board[a][b].piece)
        board[a][b].inCapture=false
      else
        board[a][b].possibleMove=false
  }
}

function possibleMoves(name:string,position:number[],color:string,board:any): number[][]{
  let result:number[][]=[]
  switch(name){
    case "pawn":
      result=pawnMove(board,position,color)
      break

    case "knight":
      result=knightMove(board,position,color)
      break

    case "bishop":
      result=bishopMove(board,position,color)
      break
      
    default:
      result=[]

  }


  return result

}



export {createBoard,showPossibleMoves,cleanUp,possibleMoves}