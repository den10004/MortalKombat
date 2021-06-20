import {getRandom} from './utils.js'
import {ATTACK, HIT} from './variables.js'

export const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1]
    const defence = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom([HIT[hit]]),
        hit,
        defence
    }
}