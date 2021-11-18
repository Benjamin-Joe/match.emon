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
var firstFippledCard = null;
var secondFippledCard = null;
var moves = document.getElementById('moves');
var moveCounter = 0;
var pairCounter = 0;
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
        messages.innerHTML = "Good Luck, The Lower The Score The Better :)";
    }
}

// ------------------------------------------------------------- Play again function

function playAgain(){
    beginButton.style.display='block';
    cardArray();
    gameBoard.innerHTML = "";
    board();
    moveCounter = 0;
    pairCounter = 0;

    
}
// ------------------------------------------------------------------- Building the game board

function board(){
    for (var i = 0; i <= (gameArray.length -1); i++){
        gameBoard.innerHTML += '<div class="game-square">';
        gameBoard.innerHTML += '<img id="playing-cards' +i+'" card-value="'+i+'" src="./assets/images/card-rear/card-rear-image.jpg" onclick="selectCard('+i+', this)" class="flipCard"></div>';
    }
}

// Game Over win/lose

// -------------------------------------------------- Function for selecting cards

function checkForMatch(firstCard, secondCard){
    var firstValue = firstCard.getAttribute('src');
    var secondValue = secondCard.getAttribute('src');
    if (firstValue == secondValue){
        return true;
    }
    else{
        return false;
    }
}
//-------------------------------------------------------------- Function for turing over cards

function flipCard(card){
    var cardValue = card.getAttribute('card-value');
    card.src = "./assets/images/"+gameArray[cardValue];
}
// ------------------------------------------------------------- Function for turning back over unmatched cards

function unFlipCard(card){
    card.src = "./assets/images/card-rear/card-rear-image.jpg";
}
// -----------------------------------------------------------------Function for matching cards

function cardIsMatched(card){
    return card.classList.contains('matched');
}

//--------------------------------------------------------------- Function for main game mechanics

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
                firstFippledCard.classList.add('matched');
                secondFippledCard.classList.add('matched');
                // Game finished
                setInterval(function () {
                if (pairCounter == 10){
                    messages.innerHTML = ("Game Finished, You Did It In " + moveCounter.toString() + " Moves. Go Again And Improve Your Score!");
                    playAgain();
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

// --------------------------------------------------------- Function for hiding cards
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

