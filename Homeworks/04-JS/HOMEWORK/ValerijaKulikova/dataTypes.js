// какой результат будет после преобразования данных
// результат написать рядом в коментария


String(123)            //123
String(-12.3)          //-12.3
String(null)           //null
String(undefined)      //underfined 
String(true)           //true
String(false)          //false
String(function () {}) //function () {} 
String({})             //[object Object]
String({ key: 42 })    //[object Object]
String([])             // 
String([1, 2])         // 1,2


Number("123")          //123 
Number("123.4")        //123.4
Number("123,4")        //NaN
Number("")             //0 
Number(null)           //NaN
Number(undefined)      //NaN
Number(true)           //NaN
Number(false)          //NaN
Number(function () {}) //NaN 
Number({})             //NaN 
Number([])             //0 
Number([1])            //1 
Number([1, 2])         //1,2 


Boolean("")             //false
Boolean("string")       //false
Boolean("false")        //false
Boolean(0)              //false
Boolean(42)             //false
Boolean(-42)            //false
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {}) //false
Boolean({})             //false
Boolean({ key: 42 })    //false
Boolean([])             //false
Boolean([1, 2])         //false 