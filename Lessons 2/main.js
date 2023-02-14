// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let masyv = [NaN, null, undefined, true, false, -5, 0, 15, 'Text', 3.1415926];
console.log(masyv[0]);
console.log(masyv[1]);
console.log(masyv[2]);
console.log(masyv[3]);
console.log(masyv[4]);
console.log(masyv[5]);
console.log(masyv[6]);
console.log(masyv[7]);
console.log(masyv[8]);
console.log(masyv[9]);
console.log(masyv[0], masyv[1], masyv[2], masyv[3], masyv[4], masyv[5], masyv[6], masyv[7], masyv[8], masyv[9])
console.log(masyv);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Книга 1',
    pagecount: 155,
    genre: 'Жанр 1'
}
let book2 = {
    title: 'Книга 2',
    pagecount: 255,
    genre: 'Жанр 2'
}
let book3 = {
    title: 'Книга 3',
    pagecount: 175,
    genre: 'Жанр 3'
}
console.log(book1);
console.log(book2);
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
book1.authors1 = ['Автор 1', 34];
// Обєкти створені вище. Просто додаю автора.
// Якщо поле автора масив, то автор не може мати поля.
console.log(book1.authors1);
console.log(book1.authors1[0], book1.authors1[1]);
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// Мабуть автор мав бути обєктом в обєкті.
book1.authors2 = {name: 'Автор 1', age: 34};
console.log(book1.authors2);
console.log(book1);
console.log(book1.authors2.name, book1.authors2.age);
// Аналогічно робимо для 2 і 3 книги.
book2.authors1 = ['Автор 2', 48];
book3.authors1 = ['Автор 3', 54];
book2.authors2 = {name: 'Автор 2', age: 48};
book3.authors2 = {name: 'Автор 3', age: 54};
console.log(book2);
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
let userList = [{name: 'Імя 1', pass: '**1**'}];
userList[1] = {name: 'Імя 2', pass: '**2**'};
userList[2] = {name: 'Імя 3', pass: '**3**'};
userList[3] = {name: 'Імя 4', pass: '**4**'};
userList[4] = {name: 'Імя 5', pass: '**5**'};
userList[userList.length] = {name: 'Імя 6', pass: '**6**'};
userList[userList.length] = {name: 'Імя 7', pass: '**7**'};
userList[userList.length] = {name: 'Імя 8', pass: '**8**'};
userList[userList.length] = {name: 'Імя 9', pass: '**9**'};
userList[userList.length] = {name: 'Імя 10', pass: '**10**'};
// Вивести в консоль пароль кожного користувача
console.log(userList[0].pass, userList[1].pass, userList[2].pass, userList[3].pass, userList[4].pass, userList[5].pass, userList[6].pass, userList[7].pass, userList[8].pass, userList[9].pass,);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
// let x = 0;
// let x = 1;
let x = -1;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50; // -1,5,12,24,30,31,45,50
if (time >= 0 && time < 15) {
    console.log('1-ша чверть');
} else if (time >= 15 && time < 30) {
    console.log('2-га чверть');
} else if (time >= 30 && time < 45) {
    console.log('3-тя чверть');
} else if (time >= 45 && time < 60) {
    console.log('4-та чверть');
} else {
    console.log('Невірне значення');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30; // -1,5,12,24,30,31,45
if (day > 0 && day <= 10) {
    console.log('1-ша декада');
} else if (day > 10 && day <= 20) {
    console.log('2-га декада');
} else if (day > 20 && day <= 31) {
    console.log('3-тя декада');
} else {
    console.log('Невірне значення');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day_list = 6; // 1..8
switch (day_list) {
    case 1:
        console.log('Розклад ПН');
        break;
    case 2:
        console.log('Розклад ВТ');
        break;
    case 3:
        console.log('Розклад СР');
        break;
    case 4:
        console.log('Розклад ЧТ');
        break;
    case 5:
        console.log('Розклад ПТ');
        break;
    case 6:
        console.log('Розклад СБ');
        break;
    case 7:
        console.log('Розклад НД');
        break;
    default:
        console.log('Невірний день тижня');
}

//     - Користувач вводить або має два числа.
let x1 = +prompt('Введіть число 1');
let x2 = +prompt('Введіть число 2');
// Експеримент з перевіркою.
// console.log(typeof x1);
// console.log(x1);
// console.log(typeof x2);
// console.log(x2);
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
if (isNaN(x1)) {
    console.log('Перша змінна не число');
} else if (isNaN(x2)) {
    console.log('Друга змінна не число');
} else if (x1 > x2) {
    console.log(`${x1} Перше число більше`);
} else if (x1 < x2) {
    console.log(`${x2} Друге число більше`);
} else console.log(`${x1} Числа однакові`);
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)
let x3 = 1234;
// x3 = NaN;
// x3 = 'verg';
// x3 = undefined;
// x3 = false;
// x3 = null;
// x3 = true;
// x3=prompt('Введіть Х');
resp = x3 || "default";
console.log(resp);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[0].title);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[1].title);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[2].title);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[3].title);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[4].title);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super - ', coursesAndDurationArray[5].title);
}