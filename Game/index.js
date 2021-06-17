//import {createPlayer} from '../Player/index.js'


class Game {
    constructor(props) {
        this.player = props.player;

    }


    start = () => {
        console.log(this.player)
        this.player.createPlayer()

        generateLogs('start', this.player)
    }
    
    
}

export default Game