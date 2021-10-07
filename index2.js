const Player = (name, marker) => {
    const getName = () => name
    const getMarker = () => marker
    return {getName, getMarker};
}

const gameBoard = (function(){
    let board = Array.from(document.querySelectorAll('.square'))
    const getBoard = () => board

    const getSquare = (a) => board[a]

    const clear = () => {
        board.forEach(square => square.textContent='')
    }

    function checkResult() {
        if (
            (board[0].textContent===board[1].textContent && board[0].textContent===board[2].textContent && board[0].textContent !== '') ||
            (board[3].textContent===board[4].textContent && board[3].textContent===board[5].textContent && board[3].textContent !== '') ||
            (board[6].textContent===board[7].textContent && board[6].textContent===board[8].textContent && board[6].textContent !== '') ||
            (board[0].textContent===board[3].textContent && board[0].textContent===board[6].textContent && board[0].textContent !== '') ||
            (board[1].textContent===board[4].textContent && board[1].textContent===board[7].textContent && board[1].textContent !== '') ||
            (board[2].textContent===board[5].textContent && board[2].textContent===board[8].textContent && board[2].textContent !== '') ||
            (board[0].textContent===board[4].textContent && board[0].textContent===board[8].textContent && board[0].textContent !== '') ||
            (board[2].textContent===board[4].textContent && board[2].textContent===board[6].textContent && board[2].textContent !== '') 
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
        if (gameBoard.getSquare(0).textContent&&gameBoard.getSquare(1).textContent&&gameBoard.getSquare(2).textContent&&gameBoard.getSquare(3).textContent&&gameBoard.getSquare(4).textContent&&gameBoard.getSquare(5).textContent&&gameBoard.getSquare(6).textContent&&gameBoard.getSquare(7).textContent&&gameBoard.getSquare(8).textContent !='') {
            if(!alert("It's a tie, try again!")){window.location.reload()}
        }
    }

    return {getBoard, clear, checkResult, getSquare}
}());

const game = (function(){
    let playerTurn = 1
    const playerSwitch = () => ((playerTurn==2) ? playerTurn=1 : playerTurn=2)
    const getCurrentPlayer = () => {
        return playerTurn
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random()*max)
    }

    const computerSelect = () => {
        if (gameBoard.getSquare(0).textContent&&gameBoard.getSquare(1).textContent&&gameBoard.getSquare(2).textContent&&gameBoard.getSquare(3).textContent&&gameBoard.getSquare(4).textContent&&gameBoard.getSquare(5).textContent&&gameBoard.getSquare(6).textContent&&gameBoard.getSquare(7).textContent&&gameBoard.getSquare(8).textContent !='') {
            return}
                else {
                    let computer = (getRandomInt(8))
                    if (gameBoard.getSquare(computer).textContent!=='') {
                        computerSelect()
                    }
                    else {
                        gameBoard.getSquare(computer).textContent='O'
                        return
                    }
                }
    }

    const pveGameClick = (event) => {
        if(event.target.textContent!=='') {alert('Please Select a Different Square')}
        
        else {
            event.target.textContent=user1.getMarker()
            if (gameBoard.checkResult()) {return}
            playerSwitch()
            computerSelect()
            if (gameBoard.checkResult()) {return}
            playerSwitch()
        }
    }

    const pvpGameClick = (event) => {
        if(event.target.textContent!=='') {alert('Please Select a Different Square')}
        
        else {
            if(playerTurn==1){
                event.target.textContent=user1.getMarker()
            }
            else {
                event.target.textContent=user2.getMarker()
            }
        }
        gameBoard.checkResult()
        playerSwitch()

    }

    const startPvp = () => {
        gameController.pveButton.classList.remove('active');
        gameController.pvpButton.classList.add('active');
        gameBoard.clear();
        playerTurn=1;

        (gameBoard.getBoard()).forEach((square) => square.removeEventListener('click', pveGameClick));
        (gameBoard.getBoard()).forEach((square) => square.addEventListener('click', pvpGameClick));
    }

    const startPve = () => {
        gameController.pvpButton.classList.remove('active');
        gameController.pveButton.classList.add('active');
        gameBoard.clear();
        playerTurn=1;

        (gameBoard.getBoard()).forEach((square) => square.removeEventListener('click', pvpGameClick));
        (gameBoard.getBoard()).forEach((square) => square.addEventListener('click', pveGameClick));
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