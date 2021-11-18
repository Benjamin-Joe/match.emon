/* 
 Keys:
 gameLock = Ability to lock the play and disable / enable users from selecting cards
 gameBoady = Calling and creating the board for the game to take place
 baginButton = The button the user clicks to begin the game
 messagaes = Messages that appear and tell the user if they have a match or not
 cardTimer = Time that cards stay turned over before unmatched cards back flip back over
 gameImages = Holds all the images needed for the game
 isCardFlipped = Turning over a card
 cardFlipped = checking if card is already turned over or not
 gameArray = The array for each individual game
 moves = number of flips it takes for a user to complete the game
 shuffleArray = array to shuffle the cards
*/



// ------------------------------------------------------------------- Game variables
var gameImages = [];
var gameArray = [];
var isCardFlipped = -1;
var cardFlipped = [];
var cardTimer = '';
var gameLock = false;
var playGame = false;
var messages = document.getElementById('messages');
var beginButton = document.getElementById('start');
var gameBoard = document.getElementById('game-grid');
let firstFippledCard = null;
let secondFippledCard = null;
var moves = document.getElementById('moves');
let moveCounter = 0;
let pairCounter = 0;
// ------------------------------------------------------------------- Event listener for starting the game

beginButton.addEventListener('click', startGame);

// --------------------------------------------------------------------- Start function

function startGame(){
    gameLock = false;
    beginButton.style.display='none';
    if(!playGame){
        playGame = true;
        cardArray();
        gameArray = gameImages.concat(gameImages);
        shuffle(gameArray);
        board();
        messages.innerHTML = "Chose A Card"
    }
}

// ------------------------------------------------------------- Play again function

function playAgain(){
    beginButton.style.display='block';
    messages.innerHTML = ("Game Finished, You Did It In " + moveCounter.toString() + " Moves. Go Again And Improve Your Score!");
    board()
    cardArray()
}

// ------------------------------------------------------------- Building the game board


function board(){
    for (var i = 0; i <= (gameArray.length -1); i++){
        gameBoard.innerHTML += '<div class="game-square">';
        gameBoard.innerHTML += '<img id="playing-cards' +i+'" card-value="'+i+'" src="./assets/images/card-rear/card-rear-image.jpg" onclick="selectCard('+i+', this)" class="flipCard"></div>';
    }
}


// Game Over win/lose

// -------------------------------------------------- Selecting cards and checking if cards match or not

function checkForMatch(firstCard, secondCard){
    const firstValue = firstCard.getAttribute('src');
    const secondValue = secondCard.getAttribute('src');
    if (firstValue == secondValue){
        return true;
    }
    else{
        return false;
    }
}

function flipCard(card){
    const cardValue = card.getAttribute('card-value');
    card.src = "./assets/images/"+gameArray[cardValue];
}

function unFlipCard(card){
    card.src = "./assets/images/card-rear/card-rear-image.jpg";
}

function cardIsMatched(card){
    return card.classList.contains('matched');
}

function selectCard(playingCard, info){
    if ((gameLock == false) && (cardIsMatched(info)== false)){
        gameLock = true;
        moveCounter = moveCounter + 1;

        moves.innerText = 'Moves: ' +  moveCounter.toString();
        if (firstFippledCard==null){
            firstFippledCard = info;
            flipCard(firstFippledCard);
            console.log('I played ' + firstFippledCard.getAttribute('card-value'));
            gameLock = false;
        }
        else{
            secondFippledCard = info;
            flipCard(secondFippledCard);
            console.log('I played ' + secondFippledCard.getAttribute('card-value'));
            if (checkForMatch(firstFippledCard, secondFippledCard)){
                pairCounter = pairCounter + 1;
                messages.innerHTML = "Yaay It's A Match";
                firstFippledCard.classList.add('matched');
                secondFippledCard.classList.add('matched');
                // Game finished
                setInterval(function () {
                if (pairCounter == 10){
                    playAgain()
                }
                   }, 1500); 
                gameLock = false;
                firstFippledCard = null;
                secondFippledCard = null;
            }
            else{
                setTimeout(function () {
                    unFlipCard(firstFippledCard);
                    unFlipCard(secondFippledCard);
                    gameLock = false;
                    firstFippledCard = null;
                    secondFippledCard = null;
                }, 2000);
            }
            
        }
    }
}

// -------------------------------------------------------- Function for keeping matched cards turned over
function checkimages(values){
    var values = document.getElementById(values).src ;
    return values;
}

// --------------------------------------------------------- Function for cards turning back over if not a match
function hideCard(){
    for(var i=0;i<2;i++){
        var hideId = cardFlipped.pop();
        document.getElementById(hideId).src = "./assets/images/card-rear/card-rear-image.jpg";
        console.log(hideId);
    }
    clearInterval(cardTimer);
    gameLock = false;
    isCardFlipped = -1;
}

function insideArray(value, shuffleArray){
    return shuffleArray.indexOf(value) > -1;
}


// -------------------------------------------------------------- Creating the game cards

function cardArray(){
    for (var i = 1; i < 11; i++){
        gameImages.push(i+'.png');
    }
}

// --------------------------------------------------------------- Shuffling playing cards

function shuffle(shuffleArray){
    for(var i = shuffleArray.length -1; i > 0; i--){
        var container = Math.floor(Math.random() * (i+1) );
        var item = shuffleArray[i];
        shuffleArray[i] = shuffleArray[container];
        shuffleArray[container] = item;
    }
    return shuffleArray;
}

//--------------------------------------------------------- Nav bar hamburger icon

function navToggle() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }else {
        x.className = "topnav";
    }
}
