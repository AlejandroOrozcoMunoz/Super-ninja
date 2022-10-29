class Ninja {
    constructor(name, salud = 3, velocidad = 3, fuerza = 3) {
      this.name = name;
      this.salud = salud;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
    }
  
    sayName() {
      console.log(`Mi nombre es ${this.name}`);
    }
  
    showStats() {
      console.log(`Name: ${this.name}, salud: ${this.salud}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`);
    }
  
    drinkSake() {
      console.log("Drinking sake!", this.salud);
      this.salud += 10;
      console.log("New salud: ", this.salud);
    }
  }
  
  class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
      super(name, 200, 10, 10, wisdom);
    }
  
    speakWisdom() {
      super.drinkSake();
      console.log(
        "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
      );
    }
  
    showStats() {
      super.showStats();
    }
  }
  
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats();


