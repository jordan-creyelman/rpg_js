import  Character  from "./character.js";
export default class Berzerker extends Character {
  constructor(name,hp=8,dmg=4,status="player") {
    super(hp,dmg,status);
    this.name = name;
  }
  rage(){
    this.dmg+=1;
    
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
