import  Character  from "./character.js";
export default class Monk extends Character {
  constructor(name,hp=8,dmg=2,mana=200,status="player") {
    super(hp,dmg,mana,status);
    this.name = name;
  }
  heal(){
    if(this.mana >24){
      this.mana-=25
      console.log("il vous reste "+this.mana+"points de mana");
      this.hp=8;
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
    else{
      return "mort"
    }
  }
} 
