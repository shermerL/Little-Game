const cellElements=document.querySelectorAll('[data-cell]')
const gameTable=document.getElementById('gameTable')
const X_CLASS='x'
const CIRCLE_CLASS='circle'
const winMsg=document.getElementById('gameWin')
const winTextMsg=document.querySelector('[data-win-text]')
const WIN_COMBINATION=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
let circleTurn


startGame()

function startGame(){
    circleTurn=false
    cellElements.forEach(cell=>{
    cell.addEventListener('click',handleClick,{once:true})
})
    setTableHoverClass()
} 




function handleClick(e){
    // console.log('clicked')
    const cell=e.target
    const currentClass=circleTurn?CIRCLE_CLASS:X_CLASS
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
        // console.log('win')
        endGame(false)
    }
    swapTurns()
    setTableHoverClass()
}


function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn=!circleTurn
}
function setTableHoverClass(){
    gameTable.classList.remove(X_CLASS)
    gameTable.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        gameTable.classList.add(CIRCLE_CLASS)
    }else{
        gameTable.classList.add(X_CLASS)
    }
    // console.log('hover')
}


function checkWin(currentClass){
    return WIN_COMBINATION.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw){
    if(draw){

    }else{
        winTextMsg.innerText=`${circleTurn?"O":"X"}赢了`
    }
    winMsg.classList.add('show')
}
