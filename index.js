const Player = (name, marker) => {
    const getName = () => name
    const getMarker = () => marker
    return {getName, getMarker};
}

const gameBoard = (function(){
    let board = [
        '', '', '',
        '', '', '',
        '', '', ''

    ]
    const getBoard = () => board

    const clear = () => {
        board=['', '', '', '', '', '', '', '', ''];
    }

    const mark = (index) => {
        if(game.getCurrentPlayer()==1) {board[index]=user1.getMarker()}
        else {board[index]=user2.getMarker()}
    }

    const computerMark = () => {

        if (board[0]&&board[1]&&board[2]&&board[3]&&board[4]&&board[5]&&board[6]&&board[8]&&board[8] !=='') {return}
        else {
            if (board[4]=='') {board[4]='O';return}
            if (board[0]==board[1] && board[0]=='X' && board[2]=='') {board[2]='O';return}
            if (board[3]==board[4] && board[3]=='X' && board[5]=='') {board[5]='O';return}
            if (board[6]==board[7] && board[6]=='X' && board[8]=='') {board[8]='O';return}
            if (board[0]==board[3] && board[0]=='X' && board[6]=='') {board[6]='O';return}
            if (board[1]==board[4] && board[1]=='X' && board[7]=='') {board[7]='O';return}
            if (board[2]==board[5] && board[2]=='X' && board[8]=='') {board[8]='O';return}
            if (board[0]==board[2] && board[0]=='X' && board[1]=='') {board[1]='O';return}
            if (board[3]==board[5] && board[3]=='X' && board[4]=='') {board[4]='O';return}
            if (board[6]==board[8] && board[6]=='X' && board[7]=='') {board[7]='O';return}   
            if (board[0]==board[4] && board[0]=='X' && board[8]=='') {board[8]='O';return}           
            if (board[8]==board[4] && board[8]=='X' && board[0]=='') {board[0]='O';return}  
            if (board[2]==board[4] && board[2]=='X' && board[6]=='') {board[6]='O';return}           
            if (board[6]==board[4] && board[6]=='X' && board[2]=='') {board[2]='O';return}

            else {
                const getRandomInt = (max) => {
                    return Math.floor(Math.random()*max)
                }
            
                let computer = (getRandomInt(8))
                if (board[computer] !== '') {
                    computerMark()
                }
                else {
                    board[computer]='O'
                    return
                }
            }
        }
    }
    

    const checkResult = () => {
        if (
            (board[0]===board[1] && board[0]===board[2] && board[0] !== '') ||
            (board[3]===board[4] && board[3]===board[5] && board[3] !== '') ||
            (board[6]===board[7] && board[6]===board[8] && board[6] !== '') ||
            (board[0]===board[3] && board[0]===board[6] && board[0] !== '') ||
            (board[1]===board[4] && board[1]===board[7] && board[1] !== '') ||
            (board[2]===board[5] && board[2]===board[8] && board[2] !== '') ||
            (board[0]===board[4] && board[0]===board[8] && board[0] !== '') ||
            (board[2]===board[4] && board[2]===board[6] && board[2] !== '') 
        ) {
            if (game.getCurrentPlayer()==1) {
                if(!alert('Player X wins!')){window.location.reload()}
                return true
            }
            else {
                if(!alert('Player O wins!')){window.location.reload()}
                return false
            }
        };
        if (board[0]&&board[1]&&board[2]&&board[3]&&board[4]&&board[5]&&board[6]&&board[7]&&board[8] !=='') {
            if(!alert("It's a tie, try again!")){window.location.reload()}
            return true
        }
    }

    const display = () => {
        for (i=0; i<board.length;i++) {
            let square = document.getElementById(i);
            square.innerText = board[i]
        }
    }

    return {getBoard, clear, checkResult, mark, display, computerMark}
}());

const game = (function(){
    let playerTurn = 1
    const playerSwitch = () => ((playerTurn==2) ? playerTurn=1 : playerTurn=2)
    const getCurrentPlayer = () => {
        return playerTurn
    }

    let squares = document.querySelectorAll('.square')

    const pveGameClick = (event) => {
        if(event.target.textContent!=='') {alert('Please Select a Different Square')}
        
        else {
            gameBoard.mark(event.target.id)
            gameBoard.display()
            if (gameBoard.checkResult()) {return}
            playerSwitch()
            gameBoard.computerMark()
            gameBoard.display()
            if (gameBoard.checkResult()) {return}
            playerSwitch()
        }
    }

    const pvpGameClick = (event) => {
        if(event.target.textContent!=='') {alert('Please Select a Different Square')}
        
        else {
            gameBoard.mark(event.target.id)
        }
        gameBoard.display()
        gameBoard.checkResult()
        playerSwitch()

    }

    const startPvp = () => {
        gameController.pveButton.classList.remove('active');
        gameController.pvpButton.classList.add('active');
        gameBoard.clear();
        gameBoard.display();
        playerTurn=1;

        squares.forEach((square) => square.removeEventListener('click', pveGameClick));
        squares.forEach((square) => square.addEventListener('click', pvpGameClick));
    }

    const startPve = () => {
        gameController.pvpButton.classList.remove('active');
        gameController.pveButton.classList.add('active');
        gameBoard.clear();
        gameBoard.display();
        playerTurn=1;

        squares.forEach((square) => square.removeEventListener('click', pvpGameClick));
        squares.forEach((square) => square.addEventListener('click', pveGameClick));
    }

    return {getCurrentPlayer, startPvp, startPve}    
}());

const gameController = (function(){
    
    const pvpButton = document.querySelector('#pvpButton')
    pvpButton.addEventListener('click', game.startPvp)

    const pveButton = document.querySelector('#pveButton')
    pveButton.addEventListener('click', game.startPve)

    return {pvpButton, pveButton}
}());

let user1 = Player('Player One', 'X')
let user2 = Player('Player Two', 'O')

game.startPve()