import Turn from "./turn.js";
import Game from "./game.js";

var game = new Game();
 var turn = new Turn();
 var players = [game.fighter.name,game.paladin.name,game.monk.name,game.berzerker.name,game.assasin.name]
alert("le jeu commence GO !!!");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// var i =0;
// var aleatoire;
// var joueurs= game.players;
// var arrays=[];
// while(i<joueurs.length){
//   aleatoire=getRandomInt(0,joueurs.length);
//   arrays+=joueurs[aleatoire].name;
//   joueurs.splice(aleatoire,1);
// } 
alert(arrays);
// while(turn.startTurn!=game.turnLeft){
//    turn.tourJoueur(players,game.fighter,game.paladin,game.monk,game.berzerker,game.assasin,game.players);
//    turn.turnNew();
//  }
//  game.win(game.players)

 
