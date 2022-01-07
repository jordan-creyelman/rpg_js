import Turn from "./turn.js";
import Game from "./game.js";

var game = new Game();
 var turn = new Turn();
 var players = [game.fighter.name,game.paladin.name,game.monk.name,game.berzerker.name,game.assasin.name]
alert("le jeu commence GO !!!");

while(turn.startTurn!=game.turnLeft){
   turn.tourJoueur(players,game.fighter,game.paladin,game.monk,game.berzerker,game.assasin,game.players);
   turn.turnNew();
 }
 game.win(game.players)

 
