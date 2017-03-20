window.onload = function() {

  var game = {
    deck: [
      {name: "Bulbasaur", damage:60},
      {name: "Caterpie", damage:40},
      {name: "Charmander", damage:60},
      {name: "Clefairy", damage:50},
      {name: "Jigglypuff", damage:60},
      {name: "Mankey", damage:30},
      {name: "Meowth", damage:60},
      {name: "Nidoran - female", damage:60},
      {name: "Nidoran - male", damage:50},
      {name: "Oddish", damage:40},
      {name: "Pidgey", damage:50},
      {name: "Pikachu", damage:50},
      {name: "Poliwag", damage:50},
      {name: "Psyduck", damage:60},
      {name: "Rattata", damage:30},
      {name: "Squirtle", damage:60},
      {name: "Vulpix", damage:50},
      {name: "Weedle", damage:40}
    ],
  cardsPlayed: [],
  currentRound: {
    playerPoints: 0,
    computerPoints: 0,
  },
  roundsPlayed: 0,
  deal: function() {
    var playerHand = document.getElementById('playerHand');

    for (i = 0; i < 3; i++) {
      var randomCard = this.deck[Math.floor(Math.random()*this.deck.length)];
      player.hand.push(randomCard);
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.addEventListener("click", player.chooseCard);
      card.innerHTML = '<h2>' + randomCard.name + '</h2> <p>Damage: ' + randomCard.damage + '</p>';
      playerHand.appendChild(card);
      this.deck.splice(this.deck.indexOf(randomCard), 1);
      }
    console.log(player.hand);

    var computerHand = document.getElementById('computerHand');

    for (j = 0; j < 3; j++) {
      var randomCard = this.deck[Math.floor(Math.random()*this.deck.length)];
      computer.hand.push(randomCard);
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.innerHTML = '<h2>' + randomCard.name + '</h2> <p>Damage: ' + randomCard.damage + '</p>';
      computerHand.appendChild(card);
      this.deck.splice(this.deck.indexOf(randomCard), 1);
      }
    console.log(computer.hand);
  } // end deal function

}; // end game object


  var player = {
  hand: [],
  compTurn: false,
  roundsWon: 0,
  chooseCard: function() {
    var card = this;
    // console.log(this);
    var battleGround = document.getElementById('battleGround');
    battleGround.appendChild(card);
    game.cardsPlayed.push(card);
    var playerSide = document.getElementById("playerHand");
    for (var i = 0; i < playerSide.children.length; i++) {
      playerSide.children[i].removeEventListener("click", player.chooseCard);
    };
    computer.chooseCard();
  }
}; // end player object

  var computer = {
    hand: [],
    roundsWon: 0,
    chooseCard: function() {
      var computerHand = document.getElementById('computerHand');
      var card = computerHand.children[Math.floor(Math.random()*computerHand.children.length)];
      var battleGround = document.getElementById('battleGround');
      battleGround.appendChild(chrome
        card);
      game.cardsPlayed.push(card);
      // console.log(computer.hand);
    }
  }; // end computer object

  ///////////////////////////// GAME PLAY
  game.deal();

}///// end window onload
