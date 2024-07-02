
// 1.

let emptyArray =[ ];

for (let i = 0;  i < 3; i++ ) {
    emptyArray[i] = [];
}
console.log(emptyArray);



// 2.

let matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
console.log (matrix);


// 3.
for ( let i=1; i<=10; i++ ){
    console.log(i);
}



// .4

// prompt("EnTer tHe NumBer fOr wHicH You WanT tHe MulTipLicaTiOn taBle",  )
// prompt ("EnteR The LenGth OF ThE  MulTipLicaTiOn taBle")
// console.log ("console.log(`Multiplication table for ${tableNumber} up to length ${tableLength}:`);")

// for ( let i=1; i<=tabelNumber ; i++){
//     console.log("$ {tabelNumber} * $ {i} = $ {tabelNumber * i}")
// }

// 5.

let fruits = [ "Apple", "Banana", "Mango", "Srange" , "Strawberry"];
console.log("Print the fruits array :");


for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



// 6.
let Counting = " ";
let ReverseCounting = " " ;
let Even = " ";
let Odd = " " ;
let Series  = " ";


// a. Countng : 1 to 15
for ( let i = 1; i <= 15; i++){
    Counting += i + " , " ;
}
console.log("a. Counting: " + Counting.slice (0,-2));

// b. Reverse counting: 10 to 1
for (let i = 10; i >= 1; i--) {
    reverseCounting += i + ", ";
  }

console.log("b. ReverseCounting:" + ReverseCounting.slice(0, -2));


// c. even numbers
for (let i=0; i <=20 ; i+=2){
    Even += i ="," ;
    }
    console.log("c. Even: " + Even.slice(0,-2) );

    // d. odd numbers 
    prompt("enter your name")
    for (let i= 1; i<=19; i+=2){
        Odd +=i + ",";
    }
    console.log("d.Odd: + Odd.slice (0,-2");

    // e. Series
    for (let i= 1; i<=10; i++) {
        Series += (2*i) + "k," ;

    }
console.log("e. Series:" + Series.slice(0,-2));