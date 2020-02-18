"use strict";

let num = 50;

if (num < 49) {
    console.log("NO")
} else if (num > 100){
    console.log("maybe no")
} else {
    console.log("yes")
};


switch (num) {
    case num < 49:
        console.log('Nooo');
        break;
    case num > 100:
        console.log('no no no');
        break;
    case num > 80:
        console.log('maybe yees');
        break;
    case 50:
        console.log('Yeeeesssssss');
        break;
    default:
        console.log('12321321321321');
        break;
}