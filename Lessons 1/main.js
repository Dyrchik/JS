// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let var01 = 'hello';
let var02 = "owu";
let var03 = `com`;
let var04 = 'ua';
let var05 = 1;
let var06 = 10;
let var07 = -999;
let var08 = 3.1415926;
let var09 = 2.7;
let var10 = 16;
let var11 = true;
let var12 = false;
console.log(var01);
console.log(var02);
console.log(var03);
console.log(var04);
console.log(var05);
console.log(var06);
console.log(var07);
console.log(var08);
console.log(var09);
console.log(var10);
console.log(var11);
console.log(var12);
let firstName = 'Derpak';
let lastName = 'Volodymyr';
let middleName = 'Bogdanovych';
let person = firstName + ' ' + lastName + ' ' + middleName;
console.log(person);
person = `${firstName} + ${lastName} + ${middleName}`;
console.log(person);
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
firstName = prompt('Прізвище',firstName);
lastName = prompt(`Імя`, lastName);
middleName = prompt(`По-батькові`, middleName);
let age = parseInt(prompt('Скільки років ?'));
person = `${firstName} ${lastName} ${middleName} ${age}`;
console.log(person);
