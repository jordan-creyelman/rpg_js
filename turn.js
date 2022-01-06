function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export default class Turn{
  constructor(){
    this.startTurn=0;

  }
  turnNew(){
     this.startTurn+=1
  }
  choicePosition(joueur){
    var i =0;
    var x =0; 
    var aleatoire = 0;
    var nombre=[];
    var trouver=false;
    var nombreTrouver=false;
    var arrays=[]
    while(trouver==false&&i<10000){
      nombreTrouver=false;
      x =0;
      aleatoire=getRandomInt(0,joueur.length);
      while (x<nombre.length&&nombreTrouver==false){
           if(aleatoire==nombre[x]) {
            nombreTrouver=true;
            
           } 
           x+=1;        
      }
      if(nombreTrouver==false){
        arrays.push(joueur[aleatoire])
        nombre.push(aleatoire) 
      }
      if(nombre.length==joueur.length){
        trouver=true
      }
      i+=1;
       
    }  
    return arrays;
  }    
  tourJoueur(arrays,fighter,paladin,monk,berzerker,assasin){
    arrays=this.choicePosition(arrays)
    alert(arrays)
    var i=0
    var choix;
    var ennemis="";
    while(i<arrays.length){
      // fighter
     if(arrays[i]==fighter.name&&fighter.hp>0){
       alert("votre point de vie "+fighter.hp+"votre points de mana"+fighter.mana)
       var darkvision = ("choisir 1 darkVision cout 20 mana ou choisir 2 pour dmg de 4");
       if(fighter.mana>19){
         choix=prompt(darkvision);
       }
       else{
         alert("vous avez plus assez de mana,attaque corps à corps dégats de 4");
         choix=2;
       }
       ennemis=prompt(assasin.joueur_life()+" "+paladin.joueur_life()+" "+monk.joueur_life()+" "+berzerker.joueur_life()+"tapez le nom du joueur")
       if(choix==1){
         
         
         if(ennemis==assasin.name){
           assasin.takeDamage(fighter.darkvision());
         }
         else if(ennemis==paladin.name){
          paladin.takeDamage(fighter.darkvision());
         }
         else if(ennemis==monk.name){
          monk.takeDamage(fighter.darkvision());
         }
         else if(ennemis==berzerker.name){
          berzerker.takeDamage(fighter.darkvision());
         }

        }else{
          if(ennemis==assasin.name){
            assasin.takeDamage(fighter.dealDamage());
          }
          else if(ennemis==paladin.name){
            paladin.takeDamage(fighter.dealDamage());
          }
          else if(ennemis==monk.name){
            monk.takeDamage(fighter.dealDamage());
          }
          else if(ennemis==berzerker.name){
            assasin.takeDamage(fighter.dealDamage());
          }
        }  

      }
      // paladin 
      if(arrays[i]==paladin.name&&paladin.hp>0){
        alert("votre point de vie "+paladin.hp+"votre points de mana"+paladin.mana)
       var healingLighting = ("choisir 1 healingLighting cout 40 mana ou choisir 2 pour dmg de 4");
       if(paladin.mana>39){
         choix=prompt(healingLighting);
       }
       else{
         alert("vous avez plus asser de mana,attaque corps à corps dégats de 4");
         choix=2;
       }
       ennemis=prompt(assasin.joueur_life()+" "+fighter.joueur_life()+" "+monk.joueur_life()+" "+berzerker.joueur_life()+"tapez le nom du joueur")
       if(choix==1){
         
         if(ennemis==assasin.name){
          assasin.takeDamage(paladin.healingLighting());
         }
         else if(ennemis==fighter.name){
          fighter.takeDamage(paladin.healingLighting());
         }
         else if(ennemis==monk.name){
          monk.takeDamage(paladin.healingLighting());
         }
         else if(ennemis==berzerker.name){
          berzerker.takeDamage(paladin.healingLighting());
         }

        }else{
          if(ennemis==assasin.name){
            assasin.takeDamage(paladin.dealDamage());
          }
          else if(ennemis==fighter.name){
            fighter.takeDamage(paladin.dealDamage());
          }
          else if(ennemis==monk.name){
            monk.takeDamage(paladin.dealDamage());
          }
          else if(ennemis==berzerker.name){
            berzerker.takeDamage(paladin.dealDamage());
          }
        } 
      }
      // monk
      if(arrays[i]==monk.name&&monk.hp>0){
        alert("votre point de vie "+monk.hp+"votre points de mana"+monk.mana)
       var heal = ("choisir 1 heal cout 25 mana ou choisir 2 pour dmg de 4");
       if(monk.mana>24){
         choix=prompt(heal);
       }
       else{
         alert("vous avez plus asser de manan,attaque corps à corps dégats de 4");
         choix=2;
       }
       ennemis=prompt(assasin.joueur_life()+" "+paladin.joueur_life()+" "+fighter.joueur_life()+" "+berzerker.joueur_life()+"tapez le nom du joueur")
       if(choix==1){
         
         monk.heal()

        }else{
          if(ennemis==assasin.name){
            assasin.takeDamage(monk.dealDamage());
          }
          else if(ennemis==paladin.name){
            paladin.takeDamage(monk.dealDamage());
          }
          else if(ennemis==fighter.name){
            fighter.takeDamage(monk.dealDamage());
          }
          else if(ennemis==berzerker.name){
            berzerker.takeDamage(monk.dealDamage());
          }
        } 
      }//berzerker
      if(arrays[i]==berzerker.name&&berzerker.hp>0){
        alert("votre point de vie "+berzerker.hp)
       var rage = ("choisir 1 rage mana ou choisir 2 pour dmg de 4");
         choix=prompt(rage);
       ennemis=prompt(assasin.joueur_life()+" "+paladin.joueur_life()+" "+monk.joueur_life()+ " "+fighter.joueur_life()+"tapez le nom du joueur")
       if(choix==2){
         
         
         if(ennemis==assasin.name){
        assasin.takeDamage(berzerker.dealDamage());
         }
         else if(ennemis==paladin.name){
          paladin.takeDamage(berzerker.dealDamage());
         }
         else if(ennemis==monk.name){
          monk.takeDamage(berzerker.dealDamage());
         }
         else if(ennemis==fighter.name){
          fighter.takeDamage(berzerker.dealDamage());
         }

        }else{
          berzerker.rage()
        } 
      }
      if(arrays[i]==assasin.name&&assasin.hp>0){
      alert("votre point de vie "+assasin.hp+"votre points de mana"+assasin.mana)
      var shadowHit = ("choisir 1 darkVision cout 20 mana ou choisir 2 pour dmg de 4");
      if(assasin.mana>19){
        choix=prompt(shadowHit);
      }
      else{
        alert("vous avez plus asser de mana,attaque corps à corps dégats de 4");
        choix=2;
      }
      ennemis=prompt(fighter.joueur_life()+" "+paladin.joueur_life()+" "+monk.joueur_life()+ " "+berzerker.joueur_life()+"tapez le nom du joueur")
      if(choix==1){
        
        
        if(ennemis==fighter.name){
           fighter.takeDamage(assasin.shadowHit())
        }
        else if(ennemis==paladin.name){
          paladin.takeDamage(assasin.shadowHit())
        }
        else if(ennemis==monk.name){
          monk.takeDamage(assasin.shadowHit())
        }
        else if(ennemis==berzerker.name){
          berzerker.takeDamage(assasin.shadowHit())
        }

       }else{
         if(ennemis==fighter.name){
          fighter.takeDamage(assasin.dealDamage());
         }
         else if(ennemis==paladin.name){
          paladin.takeDamage(assasin.dealDamage());
         }
         else if(ennemis==monk.name){
          monk.takeDamage(assasin.dealDamage());
         }
         else if(ennemis==berzerker.name){
          berzerker.takeDamage(assasin.dealDamage());
         }
       }
      }  
      

      
     i+=1;
    }
  
   
  }
 
  
}
