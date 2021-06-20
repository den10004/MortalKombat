import {logs} from './logs.js'
import {data, getRandom} from './utils.js'
import {player1, player2} from './variables.js'
import {playerAttack} from './playerAttack.js'
import {enemyAttack} from './enemyAttack.js'
import {createElement} from './createElement.js'
import {showResult} from './showResult.js'

export const $arenas = document.querySelector('.arenas')
export const $randomBotton = document.querySelector('.button')
const $chat = document.querySelector('.chat')
export const $formFight = document.querySelector('.control')

const createPlayer = (playerObj) => {
    const $player = createElement('div', 'player' + playerObj.player)
    const $progressbar = createElement('div', 'progressbar')
    const $character = createElement('div', 'character')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $img = createElement('img')


    $life.style.width = playerObj.hp + '%'
    $name.innerText = playerObj.name
    $img.src = playerObj.img

    $progressbar.appendChild($name)
    $progressbar.appendChild($life)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    $arenas.appendChild($player)

    return $player
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))


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
            el = `<p>${data} ${logs[type][getRandom(logs[type].length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player1.name)} - ${100 - player2.hp} [${player2.hp} / 100] <p>`;
            break;
        case 'end':
            el = `<p>${end}<p>`;
            break;
        case 'defence':
            el = `<p>${data} ${logs[type][getRandom(logs[type].length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)} - ${100 - player1.hp} [${player2.hp} / 100] <p>`;
            break;
        default: 
        console.log('ошибка');
        break;
    }
   
    $chat.insertAdjacentHTML('afterbegin', el)
}

generateLogs('start', player2, player1)



$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const player = playerAttack();
    const enemy = enemyAttack()

    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP
        generateLogs('hit', player2, player1)
    } else {
        generateLogs('defence', player1, player1)
    }


    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP()
        generateLogs('hit', player1, player2)   
    } else {
        generateLogs('defence', player1, player2)
    }

    showResult()
})

