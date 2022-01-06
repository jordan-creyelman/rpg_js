import  Character  from "./character.js";
export default class Paladin extends Character{
  constructor(name,hp=16,dmg=3,mana=160,status="player") {
    super(hp,dmg,mana,status);
      this.name = name;
  }
  healingLighting(personnage){
    if(this.mana >39){
      this.mana-=40
      console.log("il vous reste "+this.mana+"points de mana");
      if(this.hp>11){
        this.hp =16;
      }
      else {
        this.hp+=5;
      }
      return 4
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
