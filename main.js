const $arenas = document.querySelector('.arenas')
const $randomBotton = document.querySelector('.button')

const $formFight = document.querySelector('.control')
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];


const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    },
    changeHP: changeHP,
    renderHP: renderHP,
    elHP: elHP

}

const player2 = {
    player: 2,
    name: 'DEKSTER',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    },
    changeHP: changeHP,
    renderHP: renderHP,
    elHP: elHP
}

const playerName1 = player1.name
const playerName2 = player2.name

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}


function createPlayer(playerObj) {
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


function changeHP() {
    this.hp -= getRandom(20)
    if (this.hp <= 0) {
        this.hp = 0
    }
    this.renderHP()
    return this.hp
}

function elHP() {
    return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
    this.elHP().style.width = this.hp + '%'
}


function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle')

    if (name) {
        $loseTitle.innerText = name + ' wins'
    } else {
        $loseTitle.innerText = 'draw'
    }

    $arenas.appendChild(createReloadButton())
    return $loseTitle
}

function getRandom(num) {
    return Math.ceil(Math.random() * num)
}

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $button = createElement('button', 'button')
    $button.innerHTML = "restart";

    $reloadWrap.appendChild($button)
    $reloadWrap.addEventListener('click', function () {
        window.location.reload()
    })
    return $reloadWrap
}



function restart () {
    player1.changeHP(getRandom(20))
    player2.changeHP(getRandom(20))

    if (player1.hp === 0 || player2.hp === 0) {
        $randomBotton.disabled = true
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerLose(player2.name))
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerLose(player1.name))
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerLose())
    }
}


$randomBotton.addEventListener('click', restart)


$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const defence = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom([HIT[hit]]),
        hit,
        defence
    }
}

function fight () {
    const edemy = enemyAttack()
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
    console.log('####: a', attack)
    console.log('####: e', edemy)
}


$formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    fight()
})

