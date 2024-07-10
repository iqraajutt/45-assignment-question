"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Naji", "Raheela", "Zaib", "Saaabi"];
console.log("Due to limited space, only two people can be invited for dinner.");
while (guests.length > 2) {
    const removeGuest = guests.pop();
    console.log(`Sorry,${removeGuest},\n You are not allowed to dinner.\n`);
    guests.forEach(guest => console.log(`Dear ${guest}\n You are still invited to dinner.\n`));
}
console.log(`Final guest List,`);
