const readlineSync = require('readline-sync');

class Player {
  constructor(name, status, totalCoins, hasStar) {
    this.name = name;
    this.status = status;
    this.totalCoins = totalCoins;
    this.hasStar = false;
  }

  


  gotHit() {
    console.log(`You got hit by an enemy`)
    if(this.status === 'Small'){
      this.gameActive()
    } else if (this.status === 'Big'){
      this.status = 'Small'
      return this.status;
    } else if (this.status === 'Powered Up'){
      console.log(`Your star protected you`)
      this.status = 'Big';
      this.hasStar = false;
      return this.status;
    }
  }


  gotPowerUp() {
    console.log('You have powered up')
      if(this.status === 'Small'){
        this.status = 'Big';
      } else if (this.status ==='Big'){
        this.status = 'Powered Up';
        this.hasStar = true;
        console.log('Congratulatins you have earned a star! ')
      }
      // console.log(`You have a Star`);
    }


  gameActive() {
      this.status = 'Dead'
      console.log(`Status: ${this.status}.  Game over! `);
      process.exit();
      
    
  }

  addCoin() {
    return this.totalCoins =+ 1;
  }

  print() {
  console.log(`
  Name: ${this.name}
  Total Coins: ${this.totalCoins}
  Status: ${this.status}
  `)
  if(this.hasStar === true){
    console.log(` You have a Star!
    `)
  }
  }
}


function getRandomNum() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    player.gotHit();
  } else if (randomNum === 1) {
    player.gotPowerUp();
  } else if (randomNum === 2) {
    player.addCoin();
  }
  player.print()
}

const player = new Player('Luigi', 'Small', 0, 0);


// setinterval

const gameLoop = setInterval(getRandomNum, 1000);
