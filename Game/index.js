//import {createPlayer} from '../Player/index.js'
import {generateLogs} from '../main.js';
import Player from '../Player/index.js';



class Game extends Player{
    constructor(props) {
        super(props)
        this.player1 = props.player1;
        this.player2 = props.player2;
        this.createPlayer = props.createPlayer;
        //player1.createPlayer()
    }


    start = () => {
        this.createPlayer(this.player1)


        // generateLogs('start', this.player1, this.player2)

    }
/*
    generateLogs = (type, player) => {
 
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
          console.log('ошибка');
          break;
      }
     
      $chat.insertAdjacentHTML('afterbegin', el)
  }*/


    
    
}

export default Game