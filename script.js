let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true

let player = {
    name: "El132448",
    chips: 200
}

let messageEl = document.getElementById("message-el")
//use # for id selector, . for css 
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")

// playerEl.textContent = player.name + ": $" + player.chips

//method means function attached with object
//e.g. let player = {
//     sayHello: function(){
//         console.log("Hello!")}
//      }
// player.sayHello()
// then Hello! will be printed
//just like Math.random means a function calls random is inside object Math

function getSum() {
    sum = 0
    for(let i = 0; i < cards.length; i++){
        sum += cards[i]
    }
        // sum = cards.reduce((x,y) => {
        //     return x + y;
        // }, 0)
}

//get random number from 2 to 11
function getRandomInt(min, max) {
    min = Math.ceil(min); //make sure min & max is an integer
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function startGame() {
    hasBlackJack = false
    isAlive = true
    cards = [getRandomInt(2,11)]
    sum = cards[0]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    getSum()
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else if (sum > 21){
        message = "You are out of the game!"
        isAlive = false
    } 
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        cards.push(getRandomInt(2,11))
        renderGame()
    }
}