'use strict';

class Hamburger {
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
    
    addTopping(topping) {
      this._toppings.includes(topping) ?
        this._toppings :
        this._toppings.push(topping);
    }
    
    removeTopping(topping) {
      if (this._toppings.includes(topping)) {
        this._toppings.splice(this._toppings.indexOf(topping), 1);
      }
    }
    
    get getToppings () {
      return this._toppings;
    }
    
    get getSize() {
      return this._size;
    }
    
     get getStuffing() {
       return this._stuffing;
     }
    
     calculate(key) {
      return (Hamburger.SIZES[this._size][key] + Hamburger.STUFFINGS[this._stuffing][key] + this._toppings.reduce((acc, el, i) => acc +=  Hamburger.TOPPINGS[this._toppings[i]][key], 0));
    }
  
    calculatePrice() {
      return this.calculate('price');
    }
    calculateCalories() {
     return this.calculate('calories');
    } 
    
  }
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE'
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    }
  };
  
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD'
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15,    
  }
  };
  
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE'
  
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    }
  };
  
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  hamburger.addTopping(Hamburger.TOPPING_SPICE);
  console.log("Calories: ", hamburger.calculateCalories());
  console.log("Price: ", hamburger.calculatePrice());
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  console.log("Price with sauce: ", hamburger.calculatePrice());
  console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE);
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  console.log(`Hamburger has ${hamburger.getToppings.length} toppings`, hamburger.getToppings.length);