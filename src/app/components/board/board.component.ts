import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/boardservice/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  board:any=[]

  constructor(private boardservice:BoardService){
    this.board=this.boardservice.getBoard()

  }

  makeMove(i:number,j:number):void{
    console.log(this.board[i][j])
  }

}
