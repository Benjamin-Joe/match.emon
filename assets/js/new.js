var gameImages = [];
var gameArray = [];
var isCardFlipped = -1;
var cardFlipped = [];
var cardTimer = '';
var gameLock = false;
var playGame = false;
var messages = document.getElementById('messages')
var beginButton = document.getElementById('start');
var gameBoard = document.getElementById('game-grid');

// Building the game board

function board(){
    for (var i = 0; i <= (gameArray.length -1); i++){
        gameBoard.innerHTML += '<div class="game-square">';
        gameBoard.innerHTML += '<img id="playing-cards' +i+'" src="./assets/images/card-rear/card-rear-image.jpg" onclick="selectCard('+i+', this)" class="flipCard"></div>';

    }
}



// Selecting Cards

function selectCard(playingCard, info){
     // Check if card is already flipped
     if(!insideArray(info.id, cardFlipped)){
         console.log('Not already picked ');
     }else{
         console.log(' Is already picked ');
     }
     if(isCardFlipped >= 0){
       // Flipping second card
        if(playingCard != isCardFlipped && !gameLock){

            info.src = "./assets/images/"+gameArray[playingCard];
            cardFlipped.push(info.id);
            var playingCard = playingCard;
            gameLock = true;
            if(checkimages(cardFlipped[cardFlipped.length-1]) == checkimages(cardFlipped[cardFlipped.length-2])){
                //Does Match
                messages.innerHTML = "Yaay It's A Match :)"
                gameLock = false;
                isCardFlipped = -1;
            }else {
                // Doesn't match
                messages.innerHTML = "Not A Match Pick Again :)"
                cardTimer = setInterval(hideCard, 1000);
            }
            // Check for match

        }

    }else{
        // Flipping first card
        isCardFlipped = playingCard;
        info.src = "./assets/images/"+gameArray[playingCard];
        cardFlipped.push(info.id);
    }

}

// Function for keeping matched cards turned over
function checkimages(values){
    var values = document.getElementById(values).src ;
    return values;
}


// Function for cards turning back over if not a match
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


function insideArray(value, array){
    return array.indexOf(value) > -1;
}


//  function for game image array

function cardArray(){
    for (var i = 1; i < 11; i++){
        gameImages.push(i+'.png');
    }
}

// Start function

beginButton.addEventListener('click', startGame);
function startGame(){
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

// Shuffling playing cards

function shuffle(array){
    for(var i = array.length -1; i > 0; i--){
        var container = Math.floor(Math.random() * (i+1) );
        
        var item = array[i];
        array[i] = array[container];
        array[container] = item;

    }
    return array;
}


