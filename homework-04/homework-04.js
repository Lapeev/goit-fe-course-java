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
  
  this.getCustomerMoney = value => this.customerMoney = value;
  
  
  this.countTotalPrice = order => {
    let sum = 0;
    
    for (const product in order) {
      sum += order[product]*this.productDatabase[product];
    }
    
    return sum;
  }
  
  this.countChange = () => { 
    return (this.customerMoney - this.countTotalPrice(order) >=0 
            ? this.customerMoney - this.countTotalPrice(order) 
            : null);
  }
  
  this.onSuccess = () => console.log(`спасибо за покупку, ваша сдача ${this.countChange()}`);
  
  this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки');
  
  this.reset = () => {
    this.customerMoney = 0; 
    console.log('бабки: ', this.customerMoney);
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

if (change !== null) {
  mango.onSuccess(change);
}
else {
  mango.onError();
}
mango.reset();




