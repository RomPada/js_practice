// // ==== Task 1 - Розрахунок вартості покупки

// const productName = 'Навушники';
// const price = 1200;
// const quantity = 3;
// const totalPrice = price * quantity;

// console.log(
//   `Ви замовили ${productName} у кількості ${quantity} шт. Загальна вартість: ${totalPrice} грн.!`
// );

// // Tast 2 - Знижка на товар

// const productName2 = 'Клавіатура';
// const price2 = 2000;
// const discount = 15;
// const discountPrice = price2 - (price2 * discount) / 100;

// console.log(
//   `Товар: ${productName2}. Знижка: ${discount}%. До сплати: ${discountPrice} грн.`
// );

// // ==== Task 3 - Перевірка віку

// const age = 17;

// if (age >= 18) {
//   console.log(`Доступ дозволено`);
// } else {
//   console.log(`Доступ заборонено`);
// }

// // ==== Task 4 - Перевірка балансу

// const balance = 1000;
// const payment = 700;

// if (balance >= payment) {
//   const rest = balance - payment;
//   console.log(`Оплата успішна. Залишок: ${rest} грн.`);
// } else {
//   const missingAmount = payment - balance;
//   console.log(`Недостатньо коштів. Не вистачає: ${missingAmount} грн.`);
// }

// // ==== Task 5 - Перевірка температури

// const temperature = 28;

// if (temperature >= 30) {
//   console.log(`Спекотно.`);
// } else if (temperature >= 20 && temperature <= 29) {
//   console.log(`Тепло.`);
// } else if (temperature >= 10 && temperature <= 19) {
//   console.log(`Прохолодно.`);
// } else {
//   console.log(`Холодно.`);
// }

// //  Покращення чату
// // if (temperature >= 30) {
// //   console.log("Спекотно.");
// // } else if (temperature >= 20) {
// //   console.log("Тепло.");
// // } else if (temperature >= 10) {
// //   console.log("Прохолодно.");
// // } else {
// //   console.log("Холодно.");
// // }

// // ==== Task 6 - Перевірка логіна

// const login = 'admin';

// if (login === 'admin') {
//   console.log(`Вітаємо, адміністраторе.`);
// } else if (login === 'user') {
//   console.log('Вітаємо, користувачу.');
// } else {
//   console.log('Невідомий користувач.');
// }

// // ==== Task 7 - Перевірка пароля

// const correctPassword = 'qwerty123';
// const userPassword = 'qwerty123';

// if (correctPassword === userPassword) {
//   console.log(`Пароль правильний. Вхід дозволено.`);
// } else {
//   console.log(`Неправильний пароль. Спробуйте ще раз.`);
// }

// // ==== Task 8 - Перевірка довжини пароля

// const password = 'qwerty123';

// if (password.length >= 8) {
//   console.log(`Пароль підходить.`);
// } else {
//   console.log(`Пароль занадто короткий.`);
// }

// // ==== Task 9 - Перевірка пароля на мінімальну та максимальну довжину

// const password = 'qwerty123';

// if (password.length < 8) {
//   console.log(`Пароль занадто короткий`);
// } else if (password.length > 16) {
//   console.log(`Пароль занадто довгий`);
// } else {
//   console.log(`Пароль підходить`);
// }

// // ==== Task 10, 11 - Перевірка email

// const email = 'test@gmail.com';

// if (email.includes('@') && email.includes(`.`)) {
//   console.log(`Email коректний`);
// } else {
//   console.log(`Email некоректний`);
// }

// // ==== Task 12 - Перевірка імені користувача

// const username = 'Олена';

// if (username.length >= 3) {
//   console.log(`Ім’я підходить`);
// } else {
//   console.log(`Ім’я занадто коротке`);
// }

// // ==== Task 13 - Перевірка імені без пробілів

// const username = 'Олена';

// if (username.trim().length > 0) {
//   console.log(`Ім’я введено`);
// } else {
//   console.log(`Введіть ім’я`);
// }

// // ==== Task 14 - Перевірка товару в наявності

// const product = "Ноутбук";
// const quantity = 5;

// if (quantity > 0) {
//   console.log(`Товар ${product} є в наявності. Кількість: ${quantity} шт.`)
// }else {
//   console.log(`Товар ${product} відсутній.`);
// }

// // ==== Task 15 - Перевірка суми замовлення для безкоштовної доставки

// const orderPrice = 1200;
// const freeDeliveryFrom = 1000;

// if (orderPrice >= freeDeliveryFrom) {
//   console.log(`Безкоштовна доставка доступна`);
// } else {
//   const missingAmount = freeDeliveryFrom - orderPrice;
//   console.log(`До безкоштовної доставки не вистачає ${missingAmount} грн.`);
// }

// // ==== Task 16 - Перевірка бонусної знижки

// const orderPrice = 2500;
// const isPremiumUser = true;

// if (orderPrice >= 2000 && isPremiumUser === true) {
//   console.log(`Вам доступна бонусна знижка`);
// } else {
//   console.log(`Бонусна знижка недоступна`);
// }

// // ==== Task 17 - Перевірка права на знижку

// const age = 65;
// const isStudent = false;

// if (age >= 60 || isStudent) {
//   console.log('Знижка доступна');
// } else {
//   console.log('Знижка недоступна');
// }

// // ==== Task 18 - Перевірка доступу до кабінету

// const isLoggedIn = true;
// const isBlocked = false;

// if (isLoggedIn && !isBlocked) {
//   console.log('Доступ до кабінету дозволено');
// } else {
//   console.log('Доступ до кабінету заборонено');
// }

// // ==== Task 19 - Перевірка робочого часу

// const hour = 14;

// if (hour >= 9 && hour <= 18) {
//   console.log('Магазин відкритий');
// } else {
//   console.log('Магазин зачинений');
// }

// // ==== Task 20 - Перевірка оцінки

// const score = 85;

// if (score >= 90) {
//   console.log('Відмінно');
// } else if (score >= 75) {
//   console.log('Добре');
// } else if (score >= 60) {
//   console.log('Задовільно');
// } else {
//   console.log('Не складено');
// }

// // ==== Task 21 - Перевірка оцінки на коректність

// const score = 85;

// if (score < 0 || score > 100) {
//   console.log('Некоректна оцінка');
// } else if (score >= 90) {
//   console.log('Відмінно');
// } else if (score >= 75) {
//   console.log('Добре');
// } else if (score >= 60) {
//   console.log('Задовільно');
// } else {
//   console.log('Не складено');
// }

// // ==== Task 22 - Перевірка ролі користувача

// const role = 'admin';

// if (role === 'admin') {
//   console.log(`Повний доступ`);
// } else if (role === 'manager') {
//   console.log('Доступ до керування');
// } else if (role === 'user') {
//   console.log('Доступ користувача');
// } else {
//   console.log('Доступ заборонено');
// }

// // ==== Task 23 - Перевірка ролі через switch

// const role = 'admin';

// switch (role) {
//   case 'admin':
//     console.log('Повний доступ');
//     break;
//   case 'manager':
//     console.log('Доступ до керування');
//     break;
//   case 'user':
//     console.log('Доступ користувача');
//     break;
//   default:
//     console.log('Доступ заборонено');
// }

// // ==== Task 24 - Визначення дня тижня через switch

// const day = 3;

// switch (day) {
//   case 1:
//     console.log('Понеділок');
//     break;
//   case 2:
//     console.log('Вівторок');
//     break;
//   case 3:
//     console.log('Середа');
//     break;
//   case 4:
//     console.log('Четвер');
//     break;
//   case 5:
//     console.log('П’ятниця');
//     break;
//   case 6:
//     console.log('Субота');
//     break;
//   case 7:
//     console.log('Неділя');
//     break;
//   default:
//     console.log('Некоректний номер дня');
// }

// // ==== Task 25 - Визначення пори року через switch

// const month = 4;

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log('Зима');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('Весна');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('Літо');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('Осінь');
//     break;
//   default:
//     console.log('Некоректний номер місяця');
// }

// // ==== Task 26 - Простий масив товарів

// const products = ['Ноутбук', 'Мишка', 'Клавіатура'];

// console.log(`Перший товар: ${products[0]}`);
// console.log(`Другий товар: ${products[1]}`);
// console.log(`Третій товар: ${products[2]}`);

// console.log(`Перелік доступних товарів: ${products.join(', ')}`);

// // ==== Task 27 - Кількість елементів у масиві

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// console.log(`У кошику ${products.length} товари`);

// ==== Task 28 - Останній елемент масиву

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// const lastIndex = products.length - 1;
// console.log(`Останній товар: ${products[lastIndex]}`);
// // or
// console.log(`Останній товар: ${products[products.length - 1]}`);

// // ==== Task 29 - Додавання товару в масив

// const products = ['Ноутбук', 'Мишка', 'Клавіатура'];

// products.push('Монітор');
// console.log(products);
// console.log(products.join(', '));

// // ==== Task 30 - Видалення останнього товару

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// console.log(`Видалено товар: ${products.pop()}`);
// console.log(`Залишилось товарів: ${products.join(', ')}`);
// // or
// const deletedProduct = products.pop();
// console.log(`Видалено товар: ${deletedProduct}`);

// // ==== Task 31 - Додавання товару на початок масиву

// const products = ['Мишка', 'Клавіатура', 'Монітор'];

// products.unshift('Ноутбук');
// console.log(products.join(', '));

// // ==== Task 32 - Видалення першого товару

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// const deletedProduct = products.shift();

// console.log(`Видалено товар: ${deletedProduct}`);
// console.log(products.join(', '));

// // ==== Task 33 - Перевірка наявності товару в масиві

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];
// const searchProduct = 'Мишка';

// if (products.includes(searchProduct)) {
//   console.log(`Товар ${searchProduct} є в кошику`);
// } else {
//   console.log(`Товар ${searchProduct} відсутній у кошику`);
// }

// // ==== Task 34 - Пошук індексу товару

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];
// const searchProduct = 'Клавіатура';

// const productsIndex = products.indexOf(searchProduct);

// console.log(`Товар ${searchProduct} знаходиться під індексом ${productsIndex}`);

// ==== Task 35 - Перевірка індексу товару

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];
// const searchProduct = 'Телефон';

// const productsIndex = products.indexOf(searchProduct);

// if (products.includes(searchProduct)) {
//   console.log(
//     `Товар ${searchProduct} знаходиться під індексом ${productsIndex}`
//   );
// } else {
//   console.log(`Товар ${searchProduct} не знайдено`);
// }

// чат

// const productIndex = products.indexOf(searchProduct);

// if (productIndex === -1) {
//   console.log(`Товар ${searchProduct} не знайдено`);
// } else {
//   console.log(
//     `Товар ${searchProduct} знаходиться під індексом ${productIndex}`
//   );
// }

// ==== Task 36 - Заміна товару в масиві

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];
// const oldProduct = 'Мишка';
// const newProduct = 'Навушники';

// const productIndex = products.indexOf(oldProduct);

// if (productIndex === -1) {
//   console.log(`Товар ${oldProduct} не знайдено`);
// } else {
//   products[productIndex] = newProduct;
//   console.log(products.join(', '));
// }

// ==== Task 37 - Видалення конкретного товару з масиву (finished 11.07.26)

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];
// const productToDelete = 'Клавіатура';

// const productIndex = products.indexOf(productToDelete);

// if (productIndex === -1) {
//   console.log(`Товар ${productToDelete} не знайдено`);
// } else {
//   console.log(`Товар ${products[productIndex]} видалено`);
//   products.splice(productIndex, 1);
//   console.log(`Залишилось: ${products.join(', ')}`);
// }
// //   chat
// const deletedProduct = products[productIndex];

// products.splice(productIndex, 1);

// console.log(`Товар ${deletedProduct} видалено`);
// console.log(`Залишилось: ${products.join(', ')}`);

// // ==== Task 38 - Додавання товару в конкретне місце масиву (stasted 12.07.26)

// const products = ['Ноутбук', 'Мишка', 'Монітор'];

// products.splice(2, 0, 'Клавіатура');

// console.log(products.join(', '));

// // ==== Task 39 - Заміна кількох товарів через splice

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// products.splice(1, 2, 'Навушники', 'Колонки');

// console.log(products.join(', '));

// // ==== Task 40 - Копія частини масиву через slice

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор', 'Навушники'];

// const selectedProducts = products.slice(1, 4);

// console.log(`Обрані товари: ${selectedProducts.join(', ')}`);

// // ==== Task 41 - Перевірка кількості товарів у кошику

// const cart = ['Ноутбук', 'Мишка'];

// if (cart.length === 0) {
//   console.log('Кошик порожній');
// } else if (cart.length === 1) {
//   console.log(`У кошику ${cart.length} товар`);
// } else {
//   console.log(`У кошику ${cart.length} товари`);
// }

// // ==== Task 42 - Перебір масиву через for

// const products = ['Ноутбук', 'Мишка', 'Клавіатура', 'Монітор'];

// for (let i = 0; i < products.length; i++) {
//   console.log(`Товар ${i + 1}: ${products[i]}`);
// }

// // ==== Task 43 - Підрахунок загальної суми

// const prices = [1000, 500, 250, 750];

// let totalPrice = 0;

// for (let i = 0; i < prices.length; i++) {
//   totalPrice = totalPrice + prices[i];
// }

// console.log(`Загальна сума: ${totalPrice} грн.`);

// // ==== Task 44 - Підрахунок товарів дорожчих за 500 грн

// const prices = [1000, 500, 250, 750, 1200];

// let counter = 0;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > 500) {
//     counter += 1;
//   }
// }
// console.log(`Товарів дорожчих за 500 грн: ${counter}`);

// // ==== Task 45 - Створення нового масиву з дорогими товарами

// const prices = [1000, 500, 250, 750, 1200];

// let highPrices = [];
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > 500) {
//     highPrices.push(prices[i]);
//   }
// }
// console.log(highPrices.join(', '));

// // ==== Task 46 - Створення нового масиву зі знижками

// const prices = [1000, 500, 250, 750];

// const discountPrices = [];
// for (let i = 0; i < prices.length; i++) {
//   discountPrices.push(prices[i] * 0.9);
// }
// console.log(discountPrices.join(', '));

// // ==== Task 47 - Пошук найбільшої ціни

// const prices = [1000, 500, 250, 750, 1200];

// let maxPrice = 0;
// // let maxPrice = prices[0];
// for (let i = 0; i < prices.length; i++) {
//   if (maxPrice < prices[i]) {
//     maxPrice = prices[i];
//   }
// }
// console.log(`Найбільша ціна: ${maxPrice} грн.`);

// // ==== Task 48 - Пошук найменшої ціни

// const prices = [1000, 500, 250, 750, 1200];

// let minPrice = prices[0];
// for (let i = 0; i < prices.length; i++) {
//   if (minPrice > prices[i]) {
//     minPrice = prices[i];
//   }
// }
// console.log(`Найменша ціна: ${minPrice} грн.`);

// // ==== Task 49 - Підрахунок середньої ціни

// const prices = [1000, 500, 250, 750, 1200];

// let totalPrices = 0;

// for (let i = 0; i < prices.length; i++) {
//   totalPrices += prices[i];
// }
// const averagePrice = totalPrices / prices.length;

// console.log(`Середня ціна: ${averagePrice} грн.`);

// // ==== Task 50 - Підрахунок суми тільки дорогих товарів

// const prices = [1000, 500, 250, 750, 1200];

// let totalExpensivePrice = 0;

// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > 500) {
//     totalExpensivePrice += prices[i];
//   }
// }

// console.log(`Сума дорогих товарів: ${totalExpensivePrice} грн.`);

// // ==== Task 51 - Підрахунок кількості слів довших за 5 символів

// const words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'computer'];

// let counter = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     counter++;
//   }
// }
// console.log(`Слів довших за 5 символів: ${counter}`);

// // ==== Task 52 - Створення масиву довгих слів

// const words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'computer'];

// const longWords = [];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     longWords.push(words[i]);
//   }
// }
// console.log(longWords.join(`, `));

// // ==== Task 53 - Створення масиву слів у верхньому регістрі

// const words = ['apple', 'banana', 'cat', 'elephant'];

// const upperCaseWords = [];
// for (let i = 0; i < words.length; i++) {
//   upperCaseWords.push(words[i].toUpperCase());
// }
// console.log(upperCaseWords.join(`, `));

// // ==== Task 54 - Створення масиву слів у нижньому регістрі

// const words = ['APPLE', 'BANANA', 'CAT', 'ELEPHANT'];

// const lowerCaseWords = [];
// for (let i = 0; i < words.length; i++) {
//   lowerCaseWords.push(words[i].toLowerCase());
// }
// console.log(lowerCaseWords.join(`, `));

// // ==== Task 55 - Пошук слова, яке починається на певну літеру

// const words = ['apple', 'banana', 'cat', 'elephant', 'avocado'];

// const wordsWithA = [];
// for (let i = 0; i < words.length; i++) {
//   if (words[i][0] === 'a') {
//     wordsWithA.push(words[i]);
//   }
// }
// console.log(wordsWithA.join(`, `));

// // ==== Task 56 - Пошук слів, які закінчуються на певну літеру (finished 12.07.26)

// const words = ['apple', 'banana', 'cat', 'elephant', 'avocado'];

// const wordsWithAEnd = [];
// for (let i = 0; i < words.length; i++) {
//   //   let endWords = words[i].length - 1;
//   //   if (words[i][endWords] === 'a') {
//   if (words[i][words[i].length - 1] === 'a') {
//     wordsWithAEnd.push(words[i]);
//   }
// }
// console.log(wordsWithAEnd.join(`, `));

// // ==== Task 57 - Пошук слів, які містять літеру (started 13.07.26)

// const words = ['apple', 'banana', 'cat', 'elephant', 'avocado'];

// const wordsWithN = [];

// for (let i = 0; i < words.length; i++) {
//   for (let a = 0; a < words[i].length; a++) {
//     if (words[i][a] === 'n') {
//       wordsWithN.push(words[i]);
//       break;
//     }
//   }
// }
// console.log(wordsWithN.join(", "))

// // v.2

// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes('n')) {
//     wordsWithN.push(words[i]);
//   }
// }

// console.log(wordsWithN.join(', '));

// // ==== Task 58 - Підрахунок слів, які містять літеру

// const words = ['apple', 'banana', 'cat', 'elephant', 'avocado'];

// let counter = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes('a')) {
//     counter++;
//   }
// }

// console.log(`Слів з літерою a: ${counter}`);

// // ==== Task 59 - Підрахунок кількості літери в одному слові

// const word = 'banana';

// let counter = 0;
// const letter = 'a';

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter) {
//     counter++;
//   }
// }

// console.log(`Літера ${letter} зустрічається ${counter} рази`);

// // ==== Task 60 - Підрахунок літери в масиві слів (finished 13.07.26)

// const words = ['banana', 'apple', 'avocado'];

// const letter = 'a';
// let counter = 0;

// for (let i = 0; i < words.length; i++) {
//   for (let j = 0; j < words[i].length; j++) {
//     if (words[i][j] === letter) {
//       counter++;
//     }
//   }
// }
// console.log(`Літера ${letter} зустрічається ${counter} разів`);

// // ==== Task 61 - Порахувати кількість голосних у слові

const word = 'javascript';

