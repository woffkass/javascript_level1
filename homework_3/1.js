function isPrime(number) {
    if(number == 2) return true;
    if(((number % 2) == 0) || (number < 2)) return false;
    for(var i=3;i<=Math.ceil(Math.sqrt(number));i+=2) {
        if((number % i) == 0) return false;
    }
    return true;
}
var n = 100;
var a = 1;
while(a <= n) {
        if(isPrime(a)) console.log(a);
        a++;
}