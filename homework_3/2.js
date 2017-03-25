var a = 0;
var b = 10;
do {
    if (a == 0) {
        console.log(a + ' - это ноль');
    } 
    else if (a % 2 == 0) {
        console.log(a + ' - четное число');
    }
    else {
        console.log(a + ' - нечетное число');
    }
    a++;
} while (a <= b);