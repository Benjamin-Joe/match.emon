// Game Images

var gameImages = [];
var beginButton = document.getElementById('start')


for (var i = 1; i < 11; i++){
    gameImages.push(i+'.png');
}


// Start function
beginButton.addEventListener('click', startGame);
function startGame(){
    beginButton.style.display='none';
    console.log('Game Started');

}
