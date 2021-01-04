function foo(str) {
  if (typeof str !== 'string') {
    console.log('аргумент не строка');
  } else {
    str = str.trim(); //убираем в начале и в конце пробелы
    console.log(str.length > 30 ? str.slice(0, 30) + '...' : str);
  }
}
foo('1234567891234567891234567891234567890');