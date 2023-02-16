// n = prompt("Введите скорость в км/ч")
// l = prompt("Введите скорость в м/с")
// console.log(n + " км/ч соответствует " + n /3.6 + " м/c")
// console.log(l + " м/с соответствует " + n * 3.6 + " км/ч")

// let a = +prompt("Введите 1ую сторонну")
// let b = +prompt("Введите 2ую сторонну")
// let c = +prompt("Введите 3ю сторонну")
// let k = a+b+c;
// let p = k/2
// if(a+b>c && a+c>b && b+c>a){
//     console.log("треугольник существует \n" + "периметр = " + k +"\n" + "Площадь = " + Math.sqrt(p*(p-a)*(p-b)*(p-c)) + "\n" + "Соотношение = " + k/(Math.sqrt(p*(p-a)*(p-b)*(p-c))))
// }else{
//     console.log("треугольник не существует")
// }

// let n = Number(prompt("введите число"))
// while (isNaN(n)) {
//     n = prompt("Пожалуйста введите ЧИСЛО");
// }
// for(let i = 0; i <= n; i++){
//     if(i===0){
//         console.log(i +" buzz");
//         continue
//     }
//     if(i%5==0){
//         console.log(i +" fizz buzz");
//         continue
//     }
//     if(i%2==0){
//         console.log(i +" buzz");
//         continue
//     }
//     console.log(i + " fizz");
// }

// console.log(">\n*\n\n##\n\n***\n\n####\n\n*****\n\n#######\n\n*******\n\n########\n\n*********\n\n##########\n\n***********\n\n############\n\n||");

// const k = 1
// let n = Number(prompt("введите число"))
//  while (isNaN(n)) {
//      n = Number(prompt("Пожалуйста введите ЧИСЛО"));
// }
// while (n!==k) {
//     if(n > k){
//         console.log("число больше");    
//     }
//     if(n < k){
//         console.log("число меньше");
//     }
//     n = Number(prompt("введите число"))
// }
// console.log("число угадано");

// let n = Number(prompt("введите число n"));
// let x = Number(prompt("введите число x"));
// let y = Number(prompt("введите число y"));
// let string = `n = ${n}, x = ${x}, y = ${y} => `;
// if(n%x===0 && n%y===0){
//     console.log(string + "true") 
// }
// else{
//     console.log(string + "false")
// }

let n = Number(prompt("введите номер месяца"));
let count = 0
while (isNaN(n)) {
      n = Number(prompt("Пожалуйста введите Номер месяца"));
 }
 if (n>12 || n<1){
    n = Number(prompt("Пожалуйста введите число меньше 13 и больше 0"));
 }
if (n<=3){
    count = 1
}
if(n>=10){
    count = 4
}
if (n>3&&n<=6) {
    count = 2
}
if (n>6 && n < 10) {
    count = 3
}
let string = `месяц ${n} => ${count} квартал`
console.log(string)