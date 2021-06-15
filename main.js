import {logs} from './logs.js'
import {data, getRandom} from './utils.js'
import {HIT, ATTACK, player1, player2} from './variables.js'

const $arenas = document.querySelector('.arenas')
const $randomBotton = document.querySelector('.button')
const $chat = document.querySelector('.chat')

const $formFight = document.querySelector('.control')


const createElement = (tag, className) => {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}


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

const playerLose = (name) => {
    const $loseTitle = createElement('div', 'loseTitle')

    if (name) {
        $loseTitle.innerText = name + ' wins'

    } else {
        $loseTitle.innerText = 'draw'
    }

    $arenas.appendChild(createReloadButton())
    return $loseTitle
}

const createReloadButton = () => {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $button = createElement('button', 'button')
    $button.innerHTML = "restart";

    $reloadWrap.appendChild($button)
    $reloadWrap.addEventListener('click', function () {
        window.location.reload()
    })
    return $reloadWrap
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1]
    const defence = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom([HIT[hit]]),
        hit,
        defence
    }
}

const playerAttack = () => {
    const attack = {}
    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value])
            attack.hit = item.value
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value
        }
        item.checked = false;
    }
    return attack
}

const showResult = () => {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerLose(player2.name))
        generateLogs('end', player1, player2)
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerLose(player1.name))
        generateLogs('end', player2, player1)
    } else if (player1.hp === 0 && player2.hp === 0) {
        $randomBotton.disabled = true
        $arenas.appendChild(playerLose())
        generateLogs('draw')
    }

}

const generateLogs = (type, player1, player2) => {
 
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
        alert('ошибка')
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
    }

    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP()
        generateLogs('hit', player1, player2)
    }

    showResult()
})

