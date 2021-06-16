import {generateLogs, $randomBotton, player1, player2} from './main.js'
import {playerLose} from './playerLose.js'
const $arenas = document.querySelector('.arenas')

export const showResult = () => {
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
