const gameBoard = (
    Array.from(document.querySelectorAll('.square'))
)

const Player = (name, marker) => {
    return {name, marker};
}

startGame = () => {
    let playerTurn = document.querySelector('.playerTurn').innerHTML
    player = () => (playerTurn==2) ? playerTurn =1 : playerTurn=2


    let a = gameBoard[0]
    let b = gameBoard[1]
    let c = gameBoard[2]
    let d = gameBoard[3]
    let e = gameBoard[4]
    let f = gameBoard[5]
    let g = gameBoard[6]
    let h = gameBoard[7]
    let eye = gameBoard[8]

    for (let i=0; i<gameBoard.length; i++) {
        gameBoard[i].addEventListener('click', function() {
            if (gameBoard[i].textContent=='O' || gameBoard[i].textContent=='X') {alert('pick a different square')}
            else {
                if(playerTurn==1) {
                    gameBoard[i].textContent='X'
                    player()
                }
                else if(playerTurn==2) {
                    gameBoard[i].textContent='O'
                    player()
                }
                }


            if (
                (a.textContent===b.textContent && a.textContent===c.textContent && a.textContent !== '') ||
                (d.textContent===e.textContent && d.textContent===f.textContent && d.textContent !== '') ||
                (g.textContent===h.textContent && g.textContent===eye.textContent && g.textContent !== '') ||
                (a.textContent===d.textContent && a.textContent===g.textContent && a.textContent !== '') ||
                (b.textContent===e.textContent && b.textContent===h.textContent && b.textContent !== '') ||
                (c.textContent===f.textContent && c.textContent===eye.textContent && c.textContent !== '') ||
                (a.textContent===e.textContent && a.textContent===eye.textContent && a.textContent !== '') ||
                (g.textContent===e.textContent && g.textContent===c.textContent && g.textContent !== '') 
            ) {
                if(!alert('Winner!')){window.location.reload()}
            };
            if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !== '') {
                if(!alert('Tie')){window.location.reload();}
            }
            
        })
    };
}

let user1 = Player('Player One', 'X')
let user2 = Player('Player Two', 'O')

startGame()
