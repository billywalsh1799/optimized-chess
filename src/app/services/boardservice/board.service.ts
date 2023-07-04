import { Injectable } from '@angular/core';
import { createBoard } from './boardmethods';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  board: any = [];
  

  constructor() {
    createBoard(this.board)
  }

  getBoard() {
    return this.board
  }

   
}
