var gameImages = [];
var gameArray = [];
var playGame = false;
var beginButton = document.getElementById('start')
var gameBoard = document.getElementById('game-grid')
// Building the game board

function board(){
    for (var i = 0; i <= (gameArray.length -1); i++){
        gameBoard.innerHTML += '<div class="game-square">'
        gameBoard.innerHTML += '<img id="playing-cards' +i+'" src="./assets/images/card-rear/card-rear-image.jpg" onclick="selectCard('+i+')" class="flipCard"></div>';

    }
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

