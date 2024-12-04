// //Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const allCategori=document.querySelectorAll('li.item');
console.log ("Number of categories:",allCategori.length)



// const categoriTiatle=allCategori[0].querySelector('h2').textContent
// console.log (categoriTiatle.textContent)
// const listElement=allCategori[0].querySelector('ul')
// console.log (listElement)
// const allElements=allCategori[0].querySelectorAll('li')
// console.log (allElements)
// console.log ("Category:",categoriTiatle)
// console.log ("Elements:",allElements.length)

// const categoriTiatle1=allCategori[1].querySelector('h2').textContent;
// const allElements1=allCategori[1].querySelectorAll('li');
// console.log ("Category:",categoriTiatle1);
// console.log ("Elements:",allElements1.length);

// const categoriTiatle2=allCategori[2].querySelector('h2').textContent;
// const allElements2=allCategori[2].querySelectorAll('li');
// console.log ("Category:",categoriTiatle2);
// console.log ("Elements:",allElements2.length);
 
// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

allCategori.forEach(function (categori,index){
const categoriTiatle=categori.querySelector('h2').textContent
const quantityElements=categori.querySelectorAll('li').length

console.log (`Category:${categoriTiatle} \n Elements:${quantityElements}`)

}
)