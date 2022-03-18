'use strict';
/*const Name = prompt('Whats you name?');
const one = document.getElementById('one');
if (Name) {
    one.innerHTML = `${Name} добро пожаловать на сайт`;
}
*/
/* замыкание
const one = document.getElementById('one');
function counte() {
let counter = 0;

return function count() {
    counter++;
    return counter;
    };
}

let coun = counte();
console.log(coun());*/

let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
let c = prompt('Введите третье число');
if (a == b && a == c) {
    alert('Все числа равны');
}
else {
document.write(a);
document.write('        ' + b);
document.write('        ' + c);
let max = Math.max(a,b,c);
document.write('     Максимальное из введенных чисел: ' + max);

}

