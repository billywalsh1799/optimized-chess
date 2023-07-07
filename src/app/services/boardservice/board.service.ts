import { Injectable } from '@angular/core';
import { Square, cleanUp, createBoard, generateEmptySquare, generatePiece, possibleMoves, showPossibleMoves } from './boardmethods';
import { UpDownLeftRightCheck, diagonalCheck } from 'src/app/chesslogic/check/kingcheck';
import { checkLegalMoves } from 'src/app/chesslogic/check/legalmoves';


@Injectable({
  providedIn: 'root'
})
export class BoardService {
  
  

  board: any = [];
  selectedPiece:any=null
  selectedPieceMoves: number[][]=[]

  blackKingPosition:number[]=[0,4]
  whiteKingPosition:number[]=[7,4]
  
  legalMoves:any[]=[]

  constructor() {
    createBoard(this.board)
    this.legalMoves=checkLegalMoves(this.board,this.whiteKingPosition)
  }

  getBoard() {
    return this.board
  }

  clickPiece(i:number,j:number){

    //selectPiece
    if (this.board[i][j].piece && this.selectedPiece===null && this.legalMoves.length){
      this.selectedPiece=this.board[i][j].piece
      this.board[i][j].isSelected=true
      let {name,position,color}=this.selectedPiece
      //possible moves and captures
      
    

      this.selectedPieceMoves=possibleMoves(name,position,color,this.board,color==="white"? this.whiteKingPosition:this.blackKingPosition)
      showPossibleMoves(this.selectedPieceMoves,this.board)



      
      
    }

    //piece selected make move
    else if(this.selectedPiece!==null ){
      let [x,y]=this.selectedPiece.position
      let toSquare=this.board[i][j].piece
      if ((x!==i || y!==j) && ((toSquare && toSquare.color!==this.selectedPiece.color)|| !toSquare)){
        //make made
        //movemade=this.selectedPiece.move([x,y],[i,j],this.board,this.PM[x][y],false)
       
       /*  this.board[i][j]=this.board[x][y]
        this.board[i][j].piece.position=[i,j] */

        this.board[i][j]=generatePiece(this.selectedPiece.name,this.selectedPiece.color,[i,j])
        this.board[x][y]=generateEmptySquare()
        
        //check if the king has moved
        if(this.selectedPiece.name==="king" && this.selectedPiece.color==="white"){
          this.whiteKingPosition=[i,j]
          console.log("white king has moved to ",this.whiteKingPosition)
        }
          
        
        else if(this.selectedPiece.name==="king" && this.selectedPiece.color==="black"){
          this.blackKingPosition=[i,j]
          console.log("black king has moved to ",this.blackKingPosition)  
        }

        // verifiy if the king is in check

        let blackcheck=diagonalCheck(this.board,'black',this.blackKingPosition)|| UpDownLeftRightCheck(this.board,'black',this.blackKingPosition)
        let whitecheck=diagonalCheck(this.board,'white',this.whiteKingPosition)|| UpDownLeftRightCheck(this.board,'white',this.whiteKingPosition)

        let [xb,yb]=this.blackKingPosition
        let [xw,yw]=this.whiteKingPosition

        this.board[xb][yb].inCapture=blackcheck 
        this.board[xw][yw].inCapture=whitecheck
          


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
        this.selectedPieceMoves=possibleMoves(name,position,color,this.board,color==="white"? this.whiteKingPosition:this.blackKingPosition)
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
