let lang = 'en';
if (lang == 'ru') {
    console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
}
if (lang == 'en') {
    console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
}

//switch-case 

let lang1 = 'ru';
switch(lang1) {
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
    break;

    case 'en':  
        console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
    break;
}

//многомерный массив 

var lang2 = 'en';
var arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr[lang2]);