"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Sadaf", "Alisha", "Nimra"];
let donotCome = guests[0];
console.log(donotCome + " " + "is not coming");
guests.splice(0, 1, "Iqra");
guests.forEach(guests => console.log(`Asalam ule kum ${guests},would you like to dinner with me?`));
