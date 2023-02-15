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

const k = 10
let n = 12
while (n!==k) {
    if(n > k){
        console.log("число больше");    
    }
    if(n < k){
        console.log("число меньше");
    }
    n = Number(prompt("введите число"))
}
console.log("число угадано");