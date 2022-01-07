
import Character from './character.js'

export default class Fighter extends Character{

  constructor(name,hp=12,dmg=4,mana=40,status="player") {
    super(hp,dmg,mana,status);
    this.name = name;
    this.dimdeg=false;
  }

  darkVision(){
    if(this.mana >19){
      this.mana-=20;
      this.dimdeg=true;
      alert("il vous reste "+this.mana+"points de mana"+this.dimdeg);
      
      return 5
    }
     
  }

  takeDamage(attack){
   alert(this.dimdeg);
   if(this.dimdeg==false){
     attack-=2;
     this.hp-=attack;
  
   }else{
     attack-=2;
     alert("vous avez eu grace votre capacité spéciale 2 dmg en moins");
    this.hp-=attack;
   }
   
   
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

// 
