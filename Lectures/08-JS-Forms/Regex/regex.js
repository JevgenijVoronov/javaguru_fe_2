var regexp = new RegExp("шаблон", "флаги");
// or
var regexp = /шаблон/; // без флагов
var regexp = /шаблон/gmi; // с флагами gmi

// Флаги
// i - Если этот флаг есть, то регэксп ищет независимо от регистра, то есть не различает между А и а.
// g - Если этот флаг есть, то регэксп ищет все совпадения, иначе – только первое.
// m - Многострочный режим.



// Методы RegExp и String
// search(reg) - он всегда ищет только первое совпадение

var str = "Люблю регэкспы я, но странною любовью";

str.search( /лю/i ) // 0
str.search( /но/i ) // 18

// match(reg)
// var str = "ОЙ-Ой-ой";

// str.match( /ой/i );

var str = "ОЙ-Ой-ой";

str.match( /ой/ig ); // ["ОЙ", "Ой", "ой"]
str.match( /йо/ig ); // null - нет совпадений


// split
// '12-34-56'.split(/-/) 

// replace
// '12-34-56'.replace("-", ":")
// '12-34-56'.replace( /-/g, ":" ) 

// test
// var str = "Люблю регэкспы я, но странною любовью";

// /лю/i.test(str) // true
// /помидор/i.test(str) // false



// Классы и спецсимволы
// \d Цифра, символ от 0 до 9.

// \s Пробельный символ, включая табы, переводы строки и т.п.

// \w Символ «слова», а точнее – буква латинского алфавита или цифра или подчёркивание '_'. Не-английские буквы не являются \w, то есть русская буква не подходит.

// \b Граница слова, обозначает не символ, а границу между символами. Граница имеет «нулевую ширину» в том смысле, что обычно символам регулярного выражения соответствуют символы строки, но не в этом случае.



// Квантификаторы +, *, ? и {n}



// Начало строки ^ и конец $
// ^ - начало строки
// $ - конец строки
// var str = '100500 попугаев съели 500100';
// str.match(/\d+/ig) // 100500, 500100 (нашло все числа)

// tr.match(/^\d+/ig) // 100500 (только в начале строки)
// var num = "12.34";
// num.match(/^\d+\.\d+$/ig) // 12.34, дробь!