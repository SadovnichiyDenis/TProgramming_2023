// import { Phone } from './phone';

import { Car } from "./car";

// const first = new Phone('+7900-000 000 (123)', 1990, 'Телефон 1');
// first.year = 1998;

// first.year = -1998;
// first.call('12345');
// first.endCall();

// const second = new Phone('+799900000', -5);
// // second.name = 'Телефон 2';
// console.log(second.year);
// second.call('12345');
// second.endCall();

// console.log(first, second, Phone.phoneCount);

const first: Car = new Car('Ford', 1999);
console.log(first)
console.log(first.changeDownTransmission())
console.log(first)
console.log(`${first}`)
