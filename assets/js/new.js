// Game Images

var gameImages = [];
var playGame = false;
var beginButton = document.getElementById('start')


for (var i = 1; i < 11; i++){
    gameImages.push(i+'.png');
}


// Start function
beginButton.addEventListener('click', startGame);
function startGame(){
    beginButton.style.display='none';
    playGame = true;
    gameImages = gameImages.concat(gameImages);
    console.log(gameImages)
    console.log('Game Started');

}


