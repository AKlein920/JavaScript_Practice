
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
  // this method will 3 deal cards to both the computer and player
}
};
console.log(game.deck);

var player = {
hand: [],
playCard: function() {
  // this method will allow a player to choose a card from their hand to play against the computer
},
roundsWon: 0
};

var computer = {
  hand: [];
  playCard: function() {
    // this method will choose a card from the computer's hand to play against the player's chosen card
  },
  roundsWon: 0
}

///////////////////////////// GAME PLAY
