import {getRandom, createElement} from '../utils.js'

export const $arenas = document.querySelector('.arenas')

class Player {
    constructor(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector

    }


    elHP = () => {
        return document.querySelector(`.player${this.player} .life`);
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%'
    }

    changeHP = () => {
        this.hp -= getRandom(20)
        if (this.hp <= 0) {
            this.hp = 0
        }
        this.renderHP()
        return this.hp
    }

    createPlayer = () => {
        const $player = createElement('div', this.selector)
        const $progressbar = createElement('div', 'progressbar')
        const $character = createElement('div', 'character')
        const $life = createElement('div', 'life')
        const $name = createElement('div', 'name')
        const $img = createElement('img')
    
    
        $life.style.width = this.hp + '%'
        $name.innerText = this.name
        $img.src = this.img
    
        $progressbar.appendChild($name)
        $progressbar.appendChild($life)
        $character.appendChild($img)
        $player.appendChild($progressbar)
        $player.appendChild($character)
        $arenas.appendChild($player)
    
        const $root = document.querySelector(`.${this.rootSelector}`)
        $root.appendChild($player)
        return $player
    }
  
}

export default Player