import {getRandom} from './utils.js'

export const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}


export const ATTACK = ['head', 'body', 'foot'];


export const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    },
    changeHP,
    renderHP,
    elHP,

}

export const player2 = {
    player: 2,
    name: 'DEKSTER',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['dfd', 'ghh'],
    attack: function (name) {
        console.log(name + "Fight...")
    },
    changeHP,
    renderHP,
    elHP,
}

export function elHP () {
    return document.querySelector(`.player${this.player} .life`);
}

export function renderHP() {
    this.elHP().style.width = this.hp + '%'
}

export function changeHP () {
    this.hp -= getRandom(20)
    if (this.hp <= 0) {
        this.hp = 0
    }
    this.renderHP()
    return this.hp
}
