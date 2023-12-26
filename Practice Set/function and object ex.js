 //  Function
 function add(num1,num2){
    return num1+num2;
}
let result = add(10,20);
console.log(result);

// Object
let product = {
    company: 'Mango',
    price: 900,
    item: 'shirt',
    rating : {
        stars: 4,
        noOfLikes: 1000
    },
    displayPrice: function(){
        console.log(`Price of shirt is: ${this.price}`);
    }
};
console.log(product);
product.displayPrice();
console.log(product.company);
console.log(product.price);
console.log(product.item);