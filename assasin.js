import  Character  from "./character.js";
export default  class Assasin extends Character{
  constructor(name,hp=6,dmg=6,mana=20,status="player") {
      super(hp,dmg,mana,status);
      this.name = name;  
      this.immune = false;
  }
  shadowHit(){
    if(this.mana >19){
      this.mana-=20;
      console.log("il vous reste "+this.mana+"points de mana");
      this.immune=true;
      return 7;
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
