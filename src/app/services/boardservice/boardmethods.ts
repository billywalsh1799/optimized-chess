import { bishopMove } from "src/app/chesslogic/mouvements/bishop";
import { kingMove } from "src/app/chesslogic/mouvements/king";
import { knightMove } from "src/app/chesslogic/mouvements/knight";
import { pawnMove } from "src/app/chesslogic/mouvements/pawn";
import { queenMove } from "src/app/chesslogic/mouvements/queen";
import { rookMove } from "src/app/chesslogic/mouvements/rook";

type Piece={
  name:string,
  color:string,
  position:number[]
}


type Square={
  piece:(Piece | null)
  inCapture:boolean,
  possibleMove:boolean,
  isSelected:boolean
}

/* function createSquare(isEmpty:boolean,name:string="",color:string="",position:number[]=[]):Square{
  if(isEmpty)
    return {piece:null,inCapture:false,possibleMove:false,isSelected:false}
  else
    return {piece:{name,color,position},inCapture:false,possibleMove:false,isSelected:false}

} */
function generateEmptySquare(){
  return {piece:null,inCapture:false,possibleMove:false,isSelected:false}
}

function generatePiece(name:string,color:string,position:number[]){
  return {piece:{name,color,position},inCapture:false,possibleMove:false,isSelected:false}

}

function createBoard(board:any) :void {
    let pieces=["rook","knight","bishop","queen","king","bishop","knight","rook"]
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = generateEmptySquare();
      }
    }

    for(let j=0;j<8;j++){
      board[0][j]=generatePiece(pieces[j],"black",[0,j])
      board[1][j] =generatePiece("pawn","black",[1,j])
    }
    
    for(let j=0;j<8;j++){
      board[6][j] =generatePiece("pawn","white",[6,j])
      board[7][j]=generatePiece(pieces[j],"white",[7,j])
    }

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

function possibleMoves(name:string,position:number[],color:string,board:any,kingPosition:number[]): number[][]{
  let result:number[][]=[]
  switch(name){
    case "pawn":
      result=pawnMove(board,position,color,kingPosition)
      break

    case "knight":
      result=knightMove(board,position,color,kingPosition)
      break

    case "bishop":
      result=bishopMove(board,position,color,kingPosition)
      break
    
    case "rook":
      result=rookMove(board,position,color,kingPosition)
      break

    case "queen":
      result=queenMove(board,position,color,kingPosition)
      break
    case "king":
      result=kingMove(board,position,color)
      break

    default:
      result=[]

  }


  return result

}



export {createBoard,showPossibleMoves,cleanUp,possibleMoves,generateEmptySquare,generatePiece,Piece,Square}