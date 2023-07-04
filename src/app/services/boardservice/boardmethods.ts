function createBoard(board:any) :void {
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = {name:"empty",possibleMove:true};
      }
    }

    for(let j=0;j<8;j++){
      board[1][j] ={name:"pawn",color:"black",position:[1,j],isSelected:false,inCapture:false}
    }
    
      for(let j=0;j<8;j++){
        board[6][j] ={name:"pawn",color:"white",position:[6,j],isSelected:false,inCapture:false}
    }
      
      
      board[0][0]={name:"rook",color:"black",position:[0,0],isSelected:false,inCapture:false}
      board[0][1]={name:"knight",color:"black",position:[0,1],isSelected:false,inCapture:false}
      board[0][2]={name:"bishop",color:"black",position:[0,2],isSelected:false,inCapture:false}
      board[0][3]={name:"queen",color:"black",position:[0,3],isSelected:false,inCapture:false}
      board[0][4]={name:"king",color:"black",position:[0,4],isSelected:false,inCapture:false}
      board[0][5]={name:"bishop",color:"black",position:[0,5],isSelected:false,inCapture:false}
      board[0][6]={name:"knight",color:"black",position:[0,6],isSelected:false,inCapture:false}
      board[0][7]={name:"rook",color:"black",position:[0,7],isSelected:false,inCapture:false}
      board[7][0]={name:"rook",color:"white",position:[7,0],isSelected:false,inCapture:false}
      board[7][1]={name:"knight",color:"white",position:[7,1],isSelected:false,inCapture:false}
      board[7][2]={name:"bishop",color:"white",position:[7,2],isSelected:false,inCapture:false}
      board[7][3]={name:"queen",color:"white",position:[7,3],isSelected:false,inCapture:false}
      board[7][4]={name:"king",color:"white",position:[7,4],isSelected:false,inCapture:false}
      board[7][5]={name:"bishop",color:"white",position:[7,5],isSelected:false,inCapture:false}
      board[7][6]={name:"knight",color:"white",position:[7,6],isSelected:false,inCapture:false}
      board[7][7]={name:"rook",color:"white",position:[7,7],isSelected:false,inCapture:false}
      
  }

export {createBoard}