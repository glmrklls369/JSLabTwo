const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
const chooseOption = (opt1, opt2) => {
  let randNumber = Math.floor(Math.random() * 2);
  return randNumber === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
  return health - randomDamage();
  /*Declare an arrow function named logHealth that has two parameters named player
    and health which has a console.log method to state the following message: “player
    health: health”.*/
};

const logHealth = (player, health) => {
  console.log(`${player} health:${health}`);
};

/*Declare an arrow function named logDeath that has two parameters named winner
and loser which has a console.log method to state the following message: “winner
defeated loser”*/

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated: ${loser}`);
};

/*Declare an arrow function named isDead that has one parameter named health
which returns a boolean value of true or false based on the following condition: health
<= 0;*/

const isDead = health => {
  return health <= 0;
};

function fight() {
  let player1 = "Mitch";
  let player2 = "Adam";
  let player1Health = 100;
  let player2Health = 100;

  /*Write a while loop that
    ■ Loops while true
    ■ Declares and initializes a variable named attacker equal to the
    chooseOption function with player1 and player2 as arguments.
    ■ Has an if statement that is triggered when attacker is equal to player1.
    ● Set player2Health equal to the product of attackPlayer with
    player2Health as its argument.
    ● Calls the logHealth function with player2 and player2Health
    as its arguments.
    ● Has an if statement that runs if the product of isDead, with
    player2Health as an argument, equates to true. If true:
    ○ Call the logDeath function with player1 and player2 as
    arguments.
    ○ Break*/

  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) logDeath(player1, player2);
    } else {
      player1Health === attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) logDeath(player2, player1);
    }
  }
}

fight();
