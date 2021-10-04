const gameBoard = (
    Array.from(document.querySelectorAll('.square'))
)

const Player = (name, marker) => {
    return {name, marker};
}

let user1 = Player('Player One', 'X')
let user2 = Player('Player Two', 'O')

const pvpButton = document.querySelector('#pvpButton')
const pveButton = document.querySelector('#pveButton')


pvpGame = () => {
    pveButton.addEventListener('click', resetListener)
    pveButton.addEventListener('click', pveGame)
    pvpButton.addEventListener('click', resetListener)
    pvpButton.addEventListener('click', pvpGame)

    function resetListener() {
        for (let i=0; i<gameBoard.length; i++) {
            gameBoard[i].removeEventListener('click', clickTurn)

        }
    }

    function clickTurn(i) {
        if (i.target.textContent=='O' || i.target.textContent=='X') {alert('pick a different square')}
        else {
            if(playerTurn==1) {
                i.target.textContent=user1.marker
                player()
            }
            else if(playerTurn==2) {
                i.target.textContent=user2.marker
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
            return
        };
        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !== '') {
            if(!alert('Tie')){window.location.reload();}
        }
        
    }
    
    playerTurn=1
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
        gameBoard[i].textContent = ''
        gameBoard[i].addEventListener('click', clickTurn)
    };
}

pveGame = () => {
    pveButton.addEventListener('click', resetListener)
    pveButton.addEventListener('click', pveGame)
    pvpButton.addEventListener('click', resetListener)
    pvpButton.addEventListener('click', pvpGame)

    function computerSelect() {
        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !='') {return}
        else {
            let computer = (getRandomInt(8))
            if (gameBoard[computer].textContent!=='') {
                computerSelect()
            }
            else {
                gameBoard[computer].textContent='O'
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random()*max)
    }

    function resetListener() {
        for (let i=0; i<gameBoard.length; i++) {
            gameBoard[i].removeEventListener('click', clickTurn)

        }
    }

    function clickTurn(i) {
        if (i.target.textContent=='O' || i.target.textContent=='X') {alert('pick a different square')}
        else {
                i.target.textContent=user1.marker;
                computerSelect()

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
            if(!alert('Winner!')){window.location.reload()};
            return
        };
        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !== '') {
            if(!alert('Tie')){window.location.reload();}
        }        
    }
    
    playerTurn=1
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
        gameBoard[i].textContent = ''
        gameBoard[i].addEventListener('click', clickTurn)
    };
}

pvpGame()
