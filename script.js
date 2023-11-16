const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");


const hBtn = document.querySelector('.head-btn')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const p = document.querySelector('.pargraph_1')
const gameSection = document.querySelector('.the_game')
const table = document.createElement('table')
const final = document.createElement('h1')
final.classList.add("result")
const infoP1 = document.querySelector('#p1')
const infoP2 = document.querySelector('#p2')

const startWith = document.querySelector('.p3')






// start restart game Button

const restart = document.querySelector('.restart')
const restBtn = document.createElement('button')
restBtn.classList.add("btn")
restBtn.classList.add("web_btn")
restBtn.innerText = "Restart"
restart.append(restBtn)

restBtn.addEventListener('click', () => {
    gameSection.style.display = "none"
    restart.style.display = "none"
    
    location.reload(true);
})
// End restart game Button

// start welcome page code
gameSection.style.display = "none"
main.style.display = "none"
restart.style.display = "none"

const nextSection = () => {
    header.style.display = "none";
    main.style.display = "block"
    

}

hBtn.addEventListener('click', nextSection)

// End welcome page code

const container = document.querySelector('.container')


////////////////// Player 1 information /////////////////////////
const player_1 = document.querySelector('.player-1')
const p1_name = document.createElement('input')
p1_name.classList.add("input")
p1_name.placeholder = "Name"
player_1.append(p1_name)





////////////////// Player 2 information /////////////////////////
const player_2 = document.querySelector('.player-2')
const p2_name = document.createElement('input')
p2_name.classList.add("input")
p2_name.placeholder = "Name"
player_2.append(p2_name)




///////////////////////////////////////////////////////
const startBtn = document.querySelector('.startBtn')


const startGame = () => {
    main.style.display = "none"
    gameSection.style.display = "block"
    gameSection.append(startWith)
    startWith.innerText= "X"
    infoP1.innerText = p1_name.value;
    infoP2.innerText = p2_name.value;
}



startBtn.addEventListener('click', startGame)

container.appendChild(player_1)
container.appendChild(player_2)


const blocks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let x = 0;
let y = 0;
localStorage.setItem(x,x++)
// start winner code
const finish = (num_1,num_2,num_3) => {
    
    const elem =  document.querySelectorAll('.game_btn')
if (true) {
    if(elem[num_1].innerText === 'X') {
        final.innerText = "Winner is : "+infoP1.innerText
        restart.appendChild(final)
     
    } else {
        final.innerText = "Winner is : " +infoP2.innerText
        restart.appendChild(final)
     
    }
    elem[num_1].style.backgroundColor= "blue"
    elem[num_2].style.backgroundColor= "blue"
    elem[num_3].style.backgroundColor= "blue"
    restart.style.display = "block"
    startWith.innerText = ""
    
    for(let i = 0;i<elem.length;i++) {
        elem[i].disabled = true
        
    }
}  
   
  
}
  

let Draw = true;

const winner = () => {
    
    const win = document.querySelectorAll('.game_btn')

    
    // Row
    if (win[0].innerText === win[1].innerText && win[1].innerText === win[2].innerText && win[0].innerText != '') {
        finish(0,1,2)
        
        
    } else
    if (win[3].innerText === win[4].innerText && win[4].innerText === win[5].innerText && win[3].innerText != '') {
        finish(3,4,5)
       
    } else
    if (win[6].innerText === win[7].innerText && win[7].innerText === win[8].innerText && win[6].innerText != '') {
        finish(6,7,8)
       
    }

    /// Column 
    else
    if (win[0].innerText === win[3].innerText && win[3].innerText === win[6].innerText && win[0].innerText != '') {
        finish(0,3,6)
        

    } else
    if (win[1].innerText === win[4].innerText && win[4].innerText === win[7].innerText && win[1].innerText != '') {
        finish(1,4,7)
    } else
    if (win[2].innerText === win[5].innerText && win[5].innerText === win[8].innerText && win[2].innerText != '') {
        finish(2,5,8)
    }
    // Diagonals
    else
    if (win[0].innerText === win[4].innerText && win[4].innerText === win[8].innerText && win[0].innerText != '') {
        finish(0,4,8)

    } else
    if (win[2].innerText === win[4].innerText && win[4].innerText === win[6].innerText && win[2].innerText != '') {
        finish(2,4,6)
    } else {
        Draw += 1
        if(Draw === 10) {
            startWith.innerText = ""
            final.innerText="Draw"
            restart.append(final)
            restart.style.display = "block"
            
        }
    }
    
}
// End winner code

// start table game code
let change = 'X'
table.classList.add("table")
blocks.forEach((row) => {

    const tr = document.createElement('tr')

    table.appendChild(tr)

    row.forEach((element, indx) => {
        const gameBtn = document.createElement('button')

        gameBtn.classList.add("btn", "game_btn")
        tr.append(gameBtn)
        gameBtn.value = element;
        gameBtn.addEventListener('click', () => {
            // startWith.innerText= "O"
            audio.play();
            if (change === 'X') {
                gameBtn.innerText = "X"
                change = 'O'
                startWith.innerText= "O"
            } else {
                gameBtn.innerText = "O"
                change = 'X'
                startWith.innerText= "X"
            }
            gameBtn.disabled = true;
            winner()
        })

    });

});

// End table game code

gameSection.appendChild(table)
