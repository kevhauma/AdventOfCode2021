const fs = require('fs');
console.time('total')

class BingoBoard {
    board = []
    constructor(lines){
        lines.forEach(line => {
            this.board.push(line.split(' ').map(number=>({marked:false,number:Number(number)})))
        });
    }
    markNumber(number){
        this.board.forEach(line=>{            
            line.forEach(boardNumber=>{
               if(boardNumber.number === number){
                    boardNumber.marked =true
                }
            })
        })
    }

    checkWin(rows){
        const winningRows = this.board.reduce((winRow,line)=>{            
           return winRow + Number(line.every(boardNumber => boardNumber.marked))
        },0)
        return rows === winningRows;
    }
    getResult(){
        let result = 0
         this.board.forEach(line=>{
            line.forEach(boardNumber=>{
                if(!boardNumber.marked)
                result += boardNumber.number;
            })
        })
        return result
    }
}

console.log(' === DAY 4 ===')
const input = fs.readFileSync('./Day 4/input.txt','utf8').split('\n').filter(Boolean)

console.time('part 1')
const pulledNumbers = input.shift().split(',').map(Number)

let boards = []

for(let i=0;i<input.length;){
    lines = []
    for(let ii=0;ii<5;ii++){
        lines.push(input[i])
        i++;
    }
    boards.push(new BingoBoard(lines))
}

//works with testcase, not with real input
let winningNumber;
pulledNumbers.forEach((pulledNumber)=>{
    if(winningNumber) return
    boards.forEach(board=>{        
        board.markNumber(pulledNumber);        
        if(board.checkWin(1)){           
            winningNumber = board.getResult() * pulledNumber
        }
    })
    
})

console.timeEnd('part 1')
console.log("part 1: bingo", winningNumber)


//=================================================================================

console.time('part 2')




console.timeEnd('part 2')
console.log("part 2: bingo", null)
console.timeEnd('total')