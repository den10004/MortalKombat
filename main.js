const $root = document.querySelector('.arenas')

const player1 = {
    name: 'SCORPION',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    }
}

const player2 = {
    name: 'DEKSTER',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    }
}


function createPlayer(name, hp, img) {
    const $player1 = document.createElement('div')
    $player1.classList.add('player1')
    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = `${hp}%`
    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = name
    const $character = document.createElement('div')
    $character.classList.add('character')
    const $img = document.createElement('img')
    $img.classList.add('img')
    $img.src = `${img}`


  
    $root.appendChild($player1)
    $player1.appendChild($progressbar)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $player1.appendChild($character)
    $character.appendChild($img)
}

createPlayer(player1.name, player1.hp, player1.img)
createPlayer(player2.name, player2.hp, player2.img)



