
import Character from './character.js'
import Game from './game.js'
export default class Fighter extends Character{

  constructor(name,hp=12,dmg=4,mana=40,status="player") {
    super(hp,dmg,mana,status);
    this.name = name;
  }

  darkVision(){
    if(this.mana >19){
      this.mana-=20;
      console.log("il vous reste "+this.mana+"points de mana");
      return 5
    }
    else{
      console.log("vous avez pas assez de mana");
    }    
  }

  takeDamage(attack){
   console.log("test");
   this.hp-=attack
  }
  dealDamage(){ 
    return this.dmg
   }
   joueur_life(){
    if(this.hp>0){
      return this.name
    }
  }
} 

// 
