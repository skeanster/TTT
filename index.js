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
    pveButton.classList.remove('active')
    pvpButton.classList.add('active')
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
                playerSwitch()
            }
            else if(playerTurn==2) {
                i.target.textContent=user2.marker
                playerSwitch()
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
            if (playerTurn==2) {
                if(!alert('Player X is the Winner!')){window.location.reload()}
                return
            }
            else {
                if(!alert('Player O is the Winner!')){window.location.reload()}
                return
            }
        };
        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !== '') {
            if(!alert('Tie')){window.location.reload();}
        }
        
    }
    
    playerTurn=1
    playerSwitch = () => (playerTurn==2) ? playerTurn =1 : playerTurn=2


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
    pvpButton.classList.remove('active')
    pveButton.classList.add('active')
    pveButton.addEventListener('click', resetListener)
    pveButton.addEventListener('click', pveGame)
    pvpButton.addEventListener('click', resetListener)
    pvpButton.addEventListener('click', pvpGame)

    playerTurn=1
    playerSwitch = () => (playerTurn==2) ? playerTurn =1 : playerTurn=2

    function checkVictory() {
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
            if (playerTurn==1) {
                if(!alert('Congratulations! You win!')){window.location.reload()}
                return true
            }
            else {
                if(!alert('Computer wins... ouch')){window.location.reload()}
                return false
            }
        };
    }
    
    function computerSelect() {
        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !='') {return}
        else {
            if (e.textContent=='') {
                e.textContent=user2.marker
                return
            }
            else {
                if (g.textContent==e.textContent && g.textContent=='X' && c.textContent=='') {c.textContent=user2.marker
                    return}
                if (c.textContent==e.textContent && c.textContent=='X' && g.textContent=='') {g.textContent=user2.marker
                    return}
                if (f.textContent==e.textContent && f.textContent=='X' && d.textContent=='') {d.textContent=user2.marker
                    return}
                if (a.textContent==d.textContent && a.textContent=='X' && g.textContent=='') {g.textContent=user2.marker
                    return}
                if (g.textContent==d.textContent && g.textContent=='X' && a.textContent=='') {a.textContent=user2.marker
                    return}
                if (b.textContent==e.textContent && b.textContent=='X' && h.textContent=='') {h.textContent=user2.marker
                    return}
                if (h.textContent==e.textContent && h.textContent=='X' && b.textContent=='') {b.textContent=user2.marker
                    return}
                if (c.textContent==f.textContent && c.textContent=='X' && eye.textContent=='') {eye.textContent=user2.marker
                    return}
                if (eye.textContent==f.textContent && eye.textContent=='X' && c.textContent=='') {c.textContent=user2.marker
                    return}
                if (a.textContent==b.textContent && a.textContent=='X' && c.textContent=='') {c.textContent=user2.marker
                    return}
                if (c.textContent==b.textContent && c.textContent=='X' && a.textContent=='') {a.textContent=user2.marker
                    return}
                if (d.textContent==e.textContent && d.textContent=='X' && f.textContent=='') {f.textContent=user2.marker
                    return}
                if (g.textContent==h.textContent && g.textContent=='X' && eye.textContent=='') {eye.textContent=user2.marker
                    return}
                if (eye.textContent==h.textContent && eye.textContent=='X' && g.textContent=='') {g.textContent=user2.marker
                    return}
                if (a.textContent==h.textContent && a.textContent=='X' && d.textContent=='') {d.textContent=user2.marker
                    return}
                if (c.textContent==h.textContent && c.textContent=='X' && g.textContent=='') {f.textContent=user2.marker
                    return}
                if (eye.textContent==b.textContent && eye.textContent=='X' && f.textContent=='') {f.textContent=user2.marker
                    return}
                if (g.textContent==b.textContent && g.textContent=='X' && d.textContent=='') {d.textContent=user2.marker
                    return}
                if (a.textContent==c.textContent&& a.textContent=='X' && b.textContent=='') {b.textContent=user2.marker 
                    return}
                if (a.textContent==g.textContent && a.textContent=='X' && d.textContent=='') {d.textContent=user2.marker
                    return}
                if (g.textContent==eye.textContent && g.textContent=='X' && h.textContent=='') {h.textContent=user2.marker
                    return}
                if (c.textContent==eye.textContent && c.textContent=='X' && f.textContent=='') {f.textContent=user2.marker
                    return}
                if (a.textContent==e.textContent && a.textContent=='X' && eye.textContent=='') {eye.textContent=user2.marker
                    return}
                if (eye.textContent==e.textContent && eye.textContent=='X' && a.textContent=='') {a.textContent=user2.marker
                    return}
                if (eye.textContent==e.textContent && eye.textContent=='X' && a.textContent!=='') {c.textContent=user2.marker
                    return}
                if(e.textContent=='X' && a.textContent=='') {a.textContent=user2.marker}
                else {
                    let computer = (getRandomInt(8))
                    if (gameBoard[computer].textContent!=='') {
                        computerSelect()
                    }
                    else {
                        gameBoard[computer].textContent='O'
                        return
                    }
                }

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
                if (checkVictory()) {return}
                playerSwitch()
                computerSelect()
                if (checkVictory()) {return}
                playerSwitch()
            }

        if (a.textContent&&b.textContent&&c.textContent&&d.textContent&&e.textContent&&f.textContent&&g.textContent&&h.textContent&&eye.textContent !== '') {
            if(!alert("A tie?.. You really can't win?")){window.location.reload();}
        }
    }

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

pveGame()
