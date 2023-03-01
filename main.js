h = 1
let main = `Лаба ${h} задание № `

//alert(main + `1`)
// n = prompt("Введите скорость в км/ч")
// l = prompt("Введите скорость в м/с")
// console.log(n + " км/ч соответствует " + n /3.6 + " м/c")
// console.log(l + " м/с соответствует " + n * 3.6 + " км/ч")

//alert(main + `2`)
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

//alert(main + `3`)
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

//alert(main + `4`)
// console.log(">\n*\n\n##\n\n***\n\n####\n\n*****\n\n#######\n\n*******\n\n########\n\n*********\n\n##########\n\n***********\n\n############\n\n||");

//alert(main + `5`)
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

//alert(main + `6`)
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

// alert(main + `7`)
// let n = Number(prompt("введите номер месяца"));
// let count = 0
// while (isNaN(n)) {
//       n = Number(prompt("Пожалуйста введите Номер месяца"));
//  }
//  if (n>12 || n<1){
//     n = Number(prompt("Пожалуйста введите число меньше 13 и больше 0"));
//  }
// if (n<=3){
//     count = 1
// }
// if(n>=10){
//     count = 4
// }
// if (n>3&&n<=6) {
//     count = 2
// }
// if (n>6 && n < 10) {
//     count = 3
// }
// let string = `месяц ${n} => ${count} квартал`
// console.log(string)

//&& isNaN(k) && (k!==1 && k!==0)
h = 2;
main = `Лаба ${h} задание № `
// alert(main + `1`)
// let k = +prompt("1 если скорость в км/ч, иначе 0")
// let n = Number(prompt("введите скорость"))
// console.log(k);
// while (isNaN(n) || isNaN(k) || (k!==1 && k!==0)) {
//     console.log("+");   
//     if(isNaN(n)){
//         console.log("Ошибка в скорости");
//         n = Number(prompt("Пожалуйста введите скорость числом"));
//        }
//     if (isNaN(k)) {
//         console.log("Ошибка в выборе ед измерений");
//         k = +prompt("1 если скорость в км/ч, иначе 0!")
//     }
//     }
// k = Boolean(k) 
// let tring=``
// function ConvertSpeed(r, k) {
//     if(k === true){
//         tring =  `Скорость ${r} км/ч соответствует ${r/3.6} м/c`
//     }
//     else{
//         tring =  `Скорость ${r} м/с соответствует ${r*3.6} км/ч`
//     }
//     return tring
// }
// alert(ConvertSpeed(n, k ))

// alert(main + `2`)
// let k = +prompt("Введите число")
// while (isNaN(k)) {
//     k = +prompt("Введите ЧИСЛО!!!")
// }
// let str = ``
// function ABS(a) {
//     if(a>=0){
//         str = `absValue(${a}) -> ${a}`
//     }
//     else{
//         str = `absValue(${a}) -> ${-1*a}`
//     }
//     return str
// }
// alert(ABS(k))

// alert(main + `3`)
// let str1 = ``
// let str2 = ``
// let student = {group: 201,
//     last_name: "Иванов",
//     first_name: "Иван"}
// for (key in student) {
//     str1 += `${key}` + " ";
//     str2 += `${student[key]}`+" ";
// }
// console.log(str1+"\n"+str2);

// alert(main + `4`)
// let min = +prompt()
// let max = +prompt()
// while (isNaN(min) || isNaN(max)) {  
//          if(isNaN(min)){
//              min = Number(prompt("Пожалуйста введите min числом!"));
//             }
//          if (isNaN(max)) {
//              max = +prompt("Пожалуйста введите max числом!")
//        }
//     }
// if(min >= max){
//     let k = min
//     min = max
//     max = k
// }
// function Rand(a,b){
//     return  a + Math.floor(Math.random()*(b- a))
// }
// console.log(Rand(min,max));


// alert(main + `5`)
// let SampleArray = [7,9,83,0]
// let str = ``
// let n = +prompt("введите кол-во получаемых символов")
// while (isNaN(n)) {
//     n = Number(prompt("Пожалуйста введите кол-во числом!!!!"));
// }
// for (let index = 0; index < n; index++) {
//     let k = Math.floor(Math.random()*4)
//     str += `${SampleArray[k]}`+` `
// }
// console.log(str);