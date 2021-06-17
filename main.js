import {logs} from './logs.js'
import {data, getRandom, createElement} from './utils.js'
import {playerAttack} from './playerAttack.js'
import {playerLose} from './playerLose.js'
import {enemyAttack} from './enemyAttack.js'
//import {createElement} from './createElement.js'
import {showResult} from './showResult.js'
import Player from './Player/index.js';
import Game from './Game/index.js';

export const $arenas = document.querySelector('.arenas')
export const $randomBotton = document.querySelector('.button')
const $chat = document.querySelector('.chat')
export const $formFight = document.querySelector('.control')


export const player1 = new Player ({
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    rootSelector: 'arenas'
});


export const player2 = new Player ({
    player: 2,
    name: 'DEKSTER',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    rootSelector: 'arenas'
});

export const game = new Game(player1);
export const game1 = new Game(player2);

game.start();
game1.start();



export const generateLogs = (type, player1, player2) => {
 
      const end = logs.end[1].replace('[playerWins]', player2.name).replace('[playerLose]', player1.name)
        let el

    switch (type) {
        case 'start':
            el = `<p>${logs.start.replace('[time]', data).replace('[player1]', player2.name).replace('[player2]', player1.name)}<p>`;
            break;
        case 'draw':
            el = `<p>${logs.draw}<p>`;
            break;
        case 'hit':
            el = `<p>${data} ${logs[type][getRandom(logs[type].length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)} - ${100 - player2.hp} [${player1.hp} / 100] <p>`;
            break;
        case 'end':
            el = `<p>${end}<p>`;
            break;
        case 'defence':
            el = `<p>${data} ${logs[type][getRandom(logs[type].length -1)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)} - ${100 - player1.hp} [${player2.hp} / 100] <p>`;
            break;
        default: 
        console.log('ошибка');
        break;
    }
   
    $chat.insertAdjacentHTML('afterbegin', el)
}





$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const {hit, defence, value} = playerAttack();
    const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack()

    if (defence !== hitEnemy) {
        player1.changeHP(valueEnemy);
        player1.renderHP
        generateLogs('hit', player2, player1)
        generateLogs('defence', player1, player2)
    }

    if (defenceEnemy !== hit) {
        player2.changeHP(value);
        player2.renderHP()
        generateLogs('hit', player1, player2)
        generateLogs('defence', player2, player1)
    }

    showResult()
})
/*
function init() {
    player1.createPlayer()
    player2.createPlayer()
    generateLogs('start', player2, player1)
}

init()

*/
