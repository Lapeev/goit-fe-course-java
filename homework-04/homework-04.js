'use strict';
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  function Cashier(name, productDatabase){
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    
    this.getCustomerMoney = function(value = 0) {
      this.customerMoney = value;
    }
    
    this.countTotalPrice = function(order) {
      let sum = 0;
      
      for (const product in order) {
        sum += order[product]*this.productDatabase[product];
      }
      
      this.totalPrice = sum;
      return sum;
    }
    
    this.countChange = function() {
      return this.customerMoney - this.totalPrice;
    }
    
    this.onSuccess = function() {
      console.log(`спасибо за покупку, ваша сдача ${this.countChange()}`);
    }
    
    this.onError = function() {
      console.log('Очень жаль, вам не хватает денег на покупки');
    }
    
    this.reset = function() {
      this.customerMoney = 0; 
      console.log('бабки: ', this.customerMoney);
    }
    
    this.selling = function(value) {
      if (value >= 0) {
        this.onSuccess();
      }
      else {
        this.onError();
      }
      
      this.reset();
    }
    
  }
  
  const mango = new Cashier('Mango', products);
  const totalPrice = mango.countTotalPrice(order);
  
  mango.getCustomerMoney(300);
  
  const change = mango.countChange();
  
  console.log('сдача: ', change);
  console.log('общая стоимость: ', totalPrice);
  console.log('бабки: ', mango.customerMoney);
  console.log('имя кассира: ', mango.name);
  console.log(mango.productDatabase);
  
  mango.selling(change);