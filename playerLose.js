import {createElement} from './createElement.js'
import {$arenas} from './main.js'
import {createReloadButton} from './createReloadButton.js'

export const playerLose = (name) => {
    const $loseTitle = createElement('div', 'loseTitle')

    if (name) {
        $loseTitle.innerText = name + ' wins'

    } else {
        $loseTitle.innerText = 'draw'
    }

    $arenas.appendChild(createReloadButton())
    return $loseTitle
}
