import Fighter from "./fighter.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assasin from "./assasin.js";

export default class Game{
   constructor(){
     this.turnLeft=3;
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
  win(players){
   var i =0;
   var win= "victoire à "
   while (i<players.length){
     if(players[i].hp>0){
       console.log()
       win += " "+players[i].name
       players.status=="win"
     }
     i+=1
   }
   alert(win)
  }
  
}


