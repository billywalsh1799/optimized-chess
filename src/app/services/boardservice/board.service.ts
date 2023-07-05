import { Injectable } from '@angular/core';
import { cleanUp, createBoard, possibleMoves, showPossibleMoves } from './boardmethods';
import { pawnMove } from 'src/app/chesslogic/mouvements/pawn';
import { knightMove } from 'src/app/chesslogic/mouvements/knight';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  

  board: any = [];
  selectedPiece:any=null
  selectedPieceMoves: number[][]=[]

  blackKingPosition:number[]=[0,4]
  whiteKingPosition:number[]=[7,4]
  

  constructor() {
    createBoard(this.board)
  }

  getBoard() {
    return this.board
  }

  clickPiece(i:number,j:number){

    //selectPiece
    if (this.board[i][j].piece && this.selectedPiece===null){
      this.selectedPiece=this.board[i][j].piece
      this.board[i][j].isSelected=true
      let {name,position,color}=this.selectedPiece
      //possible moves and captures
      
     /*  if(this.selectedPiece.name==="pawn"){
        this.selectedPieceMoves=pawnMove(this.board,[i,j],this.selectedPiece.color)
        showPossibleMoves(this.selectedPieceMoves,this.board)
      }

      else if(this.selectedPiece.name==="knight"){
        this.selectedPieceMoves=knightMove(this.board,[i,j],this.selectedPiece.color)
        showPossibleMoves(this.selectedPieceMoves,this.board)
      } */

      this.selectedPieceMoves=possibleMoves(name,position,color,this.board)
      showPossibleMoves(this.selectedPieceMoves,this.board)



      
      
    }

    //piece selected make move
    else if(this.selectedPiece!==null ){
      let [x,y]=this.selectedPiece.position
      let toSquare=this.board[i][j].piece
      if ((x!==i || y!==j) && ((toSquare && toSquare.color!==this.selectedPiece.color)|| !toSquare)){
        //make made
        //movemade=this.selectedPiece.move([x,y],[i,j],this.board,this.PM[x][y],false)
       
        this.board[i][j]=this.board[x][y]
        this.board[i][j].piece.position=[i,j]
        this.board[x][y]={piece:null,inCapture:false,possibleMove:false,isSelected:false}

        //cleanup
        cleanUp(this.selectedPieceMoves,this.board)
        this.selectedPieceMoves=[]

        //this.board[x][y].isSelected=false

        this.board[i][j].isSelected=false
        this.selectedPiece=null
      }

      //selects other pice from same side
      else if((x!==i || y!==j) && (toSquare && toSquare.color===this.selectedPiece.color)){
        cleanUp(this.selectedPieceMoves,this.board)
        this.selectedPiece=this.board[i][j].piece
        let {name,color,position}=this.selectedPiece
        this.selectedPieceMoves=possibleMoves(name,position,color,this.board)
        showPossibleMoves(this.selectedPieceMoves,this.board)
        this.board[i][j].isSelected=true
        this.board[x][y].isSelected=false
      }

      //selects same piece
      else if(x===i && y===j){
        this.board[x][y].isSelected=false
        this.selectedPiece=null
        cleanUp(this.selectedPieceMoves,this.board)
      }



      //this.selectedPiece=null
      //this.board[i][j].isSelected=false
    }
    
  }



}
