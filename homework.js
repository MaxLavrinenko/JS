// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let num = [1,2,3,4,5];
// let str = ['1','2','3','4','5'];
// let bul = [1,2,'qwert','poppop', true];
// console.log(num);
// console.log(str);
// console.log(bul);
/////////////////////////////////////////////////////////////////////////
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0]= 'hello';
// arr[1]= 'okten';
// arr[2]= 88;
// arr[3]= true;
// arr[4]= 'poppop';
// console.log(arr); 
//////////////////////////////////////////////////////////////////////////
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0; i < 10; i++){
//     document.write('<div>"Hello Okten scool"</div>');
// }
//////////////////////////////////////////////////////////////////////////
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i < 10; i++){
//     document.write('<div>"Hello Okten scool"</div>', i );
//     document.write('<br>');
// }
/////////////////////////////////////////////////////////////////////////
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i< 20){
//     document.write('<h1>Hello world</h1>');
// i++
// }
////////////////////////////////////////////////////////////////////////
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
// let i = 0;
// while (i< 20){
//     document.write('<h1>Hello world </h1>' + i);
// i++
// }
///////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr [i]);
// }
//////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі./
// let arr = ['sss','aaa','qqq','www','eee','rrr','ttt','yyy','uuu','iii'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr [i]);
// }
///////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true,null,12,'pop',48,'chpok',55,'ghj',89,25];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
/////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [true,null,12,'pop',48,'chpok',false,'ghj',89,25];
// for (let arrElement of arr){
//     if (typeof arrElement === 'boolean' ){
//         console.log(arrElement);
//     }
// }
/////////////////////////////////////////////////////////////////////////////
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [true,null,12,'pop',48,'chpok',false,'ghj',89,25];
// for (let arrElement of arr){
//     if (typeof arrElement === 'number' ){
//         console.log(arrElement);
//     }
// }
///////////////////////////////////////////////////////////////////
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [true,null,12,'pop',48,'chpok',false,'ghj',89,25];
// for (let arrElement of arr){
//     if (typeof arrElement === 'string' ){
//         console.log(arrElement);
//     }
// }
/////////////////////////////////////////////////////////////////////
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0]= 'hello';
// arr[1]= 'okten';
// arr[2]= 88;
// arr[3]= true;
// arr[4]= 'poppop';
// arr[5]= 56;
// arr[6]= 35;
// arr[7]= false;
// arr[8]= 'qwert';
// arr[9]= 32;
// for (let arrElement of arr){
//     console.log(arrElement);
// }
////////////////////////////////////////////////////////////////////////////////
//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<11;i++){
//     console.log(i);
//     document.write(i);
// }
////////////////////////////////////////////////////////////////////////////////////////////
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<101; i++){
//     console.log(i);
//     document.write(i+' ');
// }
/////////////////////////////////////////////////////////////////////////////////////////////
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<101; i=i+2){
//     console.log(i);
//     document.write(i+' ');
// }
////////////////////////////////////////////////////////////
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 2; i<101; i=i+2){
//     console.log(i);
//     document.write(i+' ');
// }
///////////////////////////////////////////////////////////
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 1; i<101; i=i+2){
//     console.log(i);
//     document.write(i+' ');
// }
/////////////////////////////////////////////////////////////////////////////////////
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m=1;m<3;m++){
//     for (let s=1;s<61;s++){
//         console.log(s+'sec')
//     }
//     console.log(m + "min")
// }
//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h=1;h<3;h++){
//
//     for (let m=0;m<60;m++){
//         if (h===2 && m===21){
//         break;
//         }
//         for(let s=0;s<60;s++){
//             console.log(h +' hours ' + m + ' minutes ' + s + ' seconds');
//         }
//         //console.log(m + ' min');
//     }
//     //console.log(h + ' hour');
//}