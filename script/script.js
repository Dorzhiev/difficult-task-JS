const number = String(266219),
    arr = number.split('');
let sum = 1;

for (let i = 0; i < arr.length; i++) {
    sum *= Number(arr[i]); //multiplication 2*6*6*2*1*9
}

sum = sum ** 3;//возведение в степень 3 =  2176782336
const slc = String(sum).slice(0,2);
console.log(+slc);

