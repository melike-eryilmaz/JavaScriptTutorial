/**
 * Primitive data types
 * Boolean
    * Null :Değişkenin bir referansa atandığını fakat referansın doğru olmadıgını belirtir.
    * Undefined:Değişkenin bir referansa atanmadığını belirtir.
    * Number
    * String:Bir karakter grubudur.
    * Symbol -ecmascript 6
    * Object
 */
 /**String prototype ları bulunur.Stringler '' ve "" içine tanımlanabilir. */
 textString = 'Javascript';
 /**anchor() stringi bir anchor a çevirmemizi sağlar.bink() ,big(),bold() gibi fonksiyonlarda vardır .Fakat bunlar deprecated yani kullanımdan kalkacaktır. */
 textString.anchor();
 /**charAt() o indisteki karakteri verir. */
 textString.charAt(0);
 textString.charAt(4);
 /**charCodeAt() o indisteki karakterin kodunu verir. */
 textString.charCodeAt(2);

 /**fromCharCode() verilen karakter koduna sahip karakteri verir. */
 String.fromCharCode(83);

 /**url lerde gördüğümüz %20 ox20 ye yani boşluk karakterine denk gelir. */
 /** Emojiler birden fazla karakterden oluştuğu ve utf-8 karakterlerde oldugu için charAt() kullanımında '?' çıkar.
  * Bu yüzden charAt() yerine charCodeAt(0) ile emojinin karakterinin kodu öğrenilebilir.
  * codePointAt() ilede emojinin tüm karakterlerinin yani kendisinin kodu öğrenilebilir.
 */
/**Emoji penceresi windowsta windows tuşu +. ile açılır. */
 '😂'.charAt(0);
 '😂'.charCodeAt(0);
 '😂'.codePointAt(0);
 String.fromCodePoint(128514);//code pointden emojiye bu şekilde ulaşılabilir.


/**String concatination 
 * concat() iki stringi birleştirmemizi sağlar.
 * + ile de string birleştirme yapılır.
 * 
*/
'Javascript'.concat(' çok güzel');
console.log('Javascript'+' çok güzel');

/** endsWith() string ifadenin verilen bir string ifade ile bitip bitmediğini belirtir.true ya da false döner.*/
'JavaScript'.endsWith('Script');

/**includes() string ifade içerisinde verilen string ifade varmı? şeklinde bakar.Eğer içeriyorsa true döner. */
'JavaScript'.includes('Script');
/**indexOf() string ifade içerisindeki verilen string ifade hangi indisten başlıyor verir.
 * İlk buldugu yerin indexini verir.
 * Hiç geçmiyorsa -1 döner.
 */
'JavaScript'.indexOf('Script');

if('JavaScript'.indexOf('Script') > -1){}//includes() ile aynı şekilde çalışır.

/** String ifade içerisinde verilen stringi arar ve en son geçtiği yerin indexini verir. */
'JavaScript'.lastIndexOf('Script');

/**localeCompare() iki strigin bir dilde birbirinde önce veya sonra geldiğini bulmak için kullanılır.
 * -1 önce ,1 sonra geldiğini belirtir.
 * localeCompare sayesinde alfabetik olarak doğru sıralama yapmamızı sağlar.
 */

 'ğ'.localeCompare('z','tr');

 'ğ'.charCodeAt(0);
 'z'.charCodeAt(0);


 /**match() regex alır.ve bulur. */

 'JavaScript'.match(/Script/);

 /**padEnd() string uzunluğunu verilen uzunluğa sabitler.Sona Boşluk karakteri ekler.
   *padStart() string uzunluğunu verilen uzunluğa sabitler.Başa Boşluk karakteri ekler.  
  */
 'Ja'.padEnd(10);
 'Ja'.padStart(10);

 /**repeat() string  ifadeyi verilen sayıda tekrarlar. */
 'JS'.repeat(10);

 /**replace() string ifadeyi yeniden isimlendirir. */

 'JavaScript'.replace('Java','Ecma');

 /**search() string ifade içerisinde verilen string veya regxp arar. */

 'Javascript'.search('java');
 'Javascript'.search(/script/);

 /**slice()  slice dilim demektir.Bir string den bir dilim almamızı sağlar. */

 'Javascript'.slice(0,2);

 /**split() stringi verilen stringe göre ayırmamızı sağlar. */
 'Javascript'.split('');
 'Javascript ve Ruby'.split('ve');

 /**startsWith() string ifadenin verilen string ile başlayıp başlamadıgını kontrol eder. true veya false döner. */

 'Javascript ve ruby'.startsWith('Javascript');

 /**substring(start index,end index) substring string ayırma işlemi yapmamızı sağlar başlangıç ve bitiş indis değerlerini alır. */

 'Javascript'.substring(1,4);

 /**substr(start index,length) substr string ayırma işlemi yapmamızı sağlar başlangıç ve başlangıçtan sonra kaç karakter alacağının sayısını alır. */
 'Javascript'.substr(1,4);

 /** toUpperCase() string ifadeyi büyük harfe çevirir.*/

 'Melike'.toUpperCase();

 /**toLowerCase() string ifadeyi küçük harfe çevirir. */
 'Melike'.toLowerCase();

 /** toLocaleUpperCase() string ifadeyi verilen dildeki büyük harfe çevirir.*/

 'Melike'.toLocaleUpperCase('tr');

 /**toLocaleLowerCase() string ifadeyi verilen dildeki küçük harfe çevirir. */

 'Melike'.toLocaleLowerCase('tr');

/**toString() herşeyi stringe çevirmemizi sağlar. */
(2333).toString();

/**trim() string içindeki boşlukları temizlememizi sağlar. */

'    Javascript   '.trim();

'    Javascript   '.trimLeft();//sadece soldaki boşlukları temizler.

'    Javascript   '.trimRight();//sadece sağdaki boşlukları temizler.


/**Number Datatypes */

/**isFinite() verilen sayının sonlu olup olmadıgını döner .Sonlu ise true değilse false döner. */
Number.isFinite(10/0);

/** isInteger() sayının tamsayı olup olmadıgını döner.true ya da false*/

Number.isInteger(1);

/**isNaN() NaN olup olmadığını döner. */
parseInt('sss');//NaN -not a number

Number.isNaN(parseInt('sss'));

/**parseFloat() verileni floata çevirir. */
Number.parseFloat('1.2');

/**parseInt() verileni integere çevirir. */

Number.parseInt('1.2');


/**toExponential()  bilimsel şekilde yazmamızı sağlar.*/
(2).toExponential();

/**toFixed() sayıyı sıfırlı formatta verir.2.00 gibi*/
(2).toFixed(2);


/**Array datatype */
var arrayExample = [1,2,3,4];
/**isArray() verilenin array type olup olmadıgını döner. true ya da false */
Array.isArray(arrayExample);
/**concat() iki arrayı birleştirmemizi sağlar. */
arrayExample.concat([8,9]);

/**every() array içerisindeki tüm değerleri döner içerisinde fonksiyonlar yazılabilir. */
//Eğer dizinin tüm elemanları number ise true döner.
arrayExample.every(function(item){return typeof item == 'number';});

//false döner.
[1,2,'mel'].every(function(item){return typeof item == 'number';})

/**some() dizinin elemanlarından bazılarının özellikleri varsa true döner. */
[1,2,'mel'].some(function(item){return typeof item == 'number';})

/**fill() array içerisindeki tüm elemanları verilen ile doldurur. */

arrayExample.fill('mel');//tüm elemanlar mel olur.

Array(10);
Array(10).fill(1);//şeklinde kullanılır.

/**filter() filtrele.. */

arrayExample.filter(item =>{ item % 2 == 0});//çift sayıları filtreler.


/**find() ilk buldugu değeri döner. */

arrayExample.find(item => item %2 == 0);

/**findIndex() find gibidir.Ama ındex değeri döner.Eğer bulamaz ise -1 döner.
 * +false şeklinde rakama çevirebiliriz..rakam karşılığına..
 */

 arrayExample.findIndex(item =>{ item % 2 == 0});


 /**foreach() diziyi dönememizi sağlar.Her biri için döner. */
 
 arrayExample.forEach(item => {console.log(item);});

 /**includes() array içerisinde varmı yokmu bakar.true ,false döner. */

 arrayExample.includes(4);

 /**indexOf() dizi içinde arar ,bulursa indexi döner .Yoksa -1 döner. */

 arrayExample.indexOf(8);

 /**join() bir araya getirir. 
  * Array tüm itemlarını verilen karakterle birleştirip string olarak geri döner.
 */

 arrayExample.join(',');

 /**map() array i değiştirmemizi sağlar.
  * Arrayi komple yeni hale getirir.
 */

 arrayExample.map(item => item*2);

 arrayExample.map(item => item*item);

/**pop array sonundan bir eleman çeker. Array i değiştirir. */

arrayExample.pop();

/**push() dizinin sonuna ekler.Nereye eklediğinin indexini verir.
 * Arrayi değiştirir.
 */

arrayExample.push(45);

/**reverse() array ters çevirir.
 * Arrayi değiştirir.
*/

arrayExample.reverse();


/**shift() dizinin baştan ilk elemanını alır. */

arrayExample.shift();

/**slice() dilim olarak alır. */

arrayExample.slice(0,2);

/**unshift() dizinin en başına eleman ekler. */

arrayExample.unshift(25);

/**sort() arrayi sıralar .İçerisine function verebiliriz. */

arrayExample.sort();

['mel','el','as','şer'].sort((a,b)=>{a.localeCompare(b,'tr');});

['mel','el','as','şer'].sort();

/**Object datatypes 
 * Object data type key ve value lardan oluşan javascriptte çokça kullanılan tiptir.
 * İçerisine fonksiyon ,nesne,dizi,değişken gibi bir çok bilgi alabilir.
 * JSON-Javascript Object Notation :Tamamen javascript için özelleştirilmiş ,nesne modelidir.
*/

var object = {
   name : 'Melike',
   surname: 'Eryılmaz',
   age:23,
   func : function (){ return 1;},
   x : [1,2,3],
   z: {
      name:'mel',
      surname:'er'
   }
}

console.log(object.age); //Nesnelerin özellikler ve fonksiyonlarına bu şekilde erişebiliriz.

Object.keys(object);//Nesnelerin keylerine bu şekilde erişebiliriz.

Object.values(object);//Nesnelerin value larına bu şekilde erişebiliriz.

console.log(object.func());




/**Javascript Functions
 * Belirli sırada çalışan komutları içeren tek bir komuta function denir.
 * Değerleri return eder.
 * 
*/
