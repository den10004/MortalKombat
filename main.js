const $arenas = document.querySelector('.arenas')
const $randomBotton = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    }
}

const player2 = {
    player: 2,
    name: 'DEKSTER',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    }
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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20) 
    $playerLife.style.width = player.hp + '%';
    

    if (player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name))
        $playerLife.style.width = 0 + '%';
        $randomBotton.disabled = true
    } 
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle')
   if (name === playerName1) {
     $loseTitle.innerText = playerName2 + ' won'
   }
   else {
    $loseTitle.innerText = playerName1 + ' won' 
   }
    return $loseTitle
}


$randomBotton.addEventListener('click', function () {
    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))





