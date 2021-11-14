/* Information for production
id = game-grid for play area
id = w-l for win and lose message
id = timer for countdown timer 
id = moves for move counter
*/

var countdown = 60;
var activeCard = [];
var gridObjects = '';

var timer = document.getElementById('timer');
var gameGrid =document.getElementById('game-grid');
var winOrLose = document.getElementById('w-l');
var counter = document.getElementById('moves');

var cardList = [
    {
        id: 1,
        name: 'articuna',
        image: './assets/images/articuna.png'
    },
    {
        id: 2,
        name: 'articuna',
        image: './assets/images/articuna.png'
    },
    {
        id: 3,
        name: 'ash-pikachu',
        image: './assets/images/ash-pikachu.png'
    },
    {
        id: 4,
        name: 'ash-pikachu',
        image: './assets/images/ash-pikachu.png'
    },
    {
        id: 5,
        name: 'charizard',
        image: './assets/images/charizard.png'
    },
    {
        id: 6,
        name: 'charizard',
        image: './assets/images/charizard.png'
    },
    {
        id: 7,
        name: 'charmander',
        image: './assets/images/charmander.png'
    },
    {
        id: 8,
        name: 'charmander',
        image: './assets/images/charmander.png'
    },
    {
        id: 9,
        name: 'jolteon',
        image: './assets/images/jolteon.png'
    },
    {
        id: 10,
        name: 'jolteon',
        image: './assets/images/jolteon.png'
    },
    {
        id: 11,
        name: 'mewtwo',
        image: './assets/images/mewtwo.png'
    },
    {
        id: 12,
        name: 'mewtwo',
        image: './assets/images/mewtwo.png'
    },
    {
        id: 13,
        name: 'munchlax',
        image: './assets/images/munchlax.png'
    },
    {
        id: 14,
        name: 'munchlax',
        image: './assets/images/munchlax.png'
    },
    {
        id: 15,
        name: 'pikachu',
        image: './assets/images/pikachu.png'
    },
    {
        id: 16,
        name: 'pikachu',
        image: './assets/images/pikachu.png'
    },
    {
        id: 17,
        name: 'psyduck',
        image: './assets/images/psyduck.png'
    },
    {
        id: 18,
        name: 'psyduck',
        image: './assets/images/psyduck.png'
    },
    {
        id: 19,
        name: 'sobble',
        image: './assets/images/sobble.png'
    },
    {
        id: 20,
        name: 'sobble',
        image: './assets/images/sobble.png'
    },
];

/*
IMPORTANT! Test Code Below Before moving on
*/

function warningClock(seconds){
    if(seconds >= 5){
        timer.innerText =`00:${seconds}`;
    }else{
        timer.innerText =`00:${seconds}`;

        if(timer.style.color !='red'){
            timer.style.color = 'red';
        }
    }
}

