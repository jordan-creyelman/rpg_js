import Fighter from "./fighter.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assasin from "./assasin.js";

export default class Game{
   constructor(){
     this.turnLeft=10;
     this.fighter=new Fighter(name="grace");
     this.paladin=new Paladin(name="ulder");
     this.monk=new Monk(name="moana");
     this.berzerker= new Berzerker(name="draven");
     this.assasin=new Assasin(name="carl");
     this.players =[this.fighter,this.paladin,this.monk,this.berzerker,this.assasin]
   }
   newTurn(){
     this.turnLeft-=1;
   }
  // win(fighter,paladin,monk,berzerker,assasin){
  //  var i =0;
  //  var win ;
  //  while (i<5){
  //    if()
  //    i+=1
  //  }
  // }
}


