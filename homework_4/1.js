/*jslint browser: true, devel: true */
var numbers = {
  
};
var number = prompt('Введите число от 0 до 999', 0);
if (parseInt(number, 10) > 999) {
  console.log('Введенное число больше 999' + numbers);
} else {
  numbers['единицы'] = number % 10;
  numbers['десятки'] = Math.floor((number % 100) / 10);
  numbers['сотни'] = Math.floor(number / 100);
}
console.log(numbers);