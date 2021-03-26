/**
 * Fonksiyonlar 
	Bir işlem grubunu bir fonksiyona atarız.
	function keyword ile fonksyion tanımlarız.
	Birden fazla komutu tek çağrımla yapabilmemizi sağlar.
	Prosedür mantığında kullanılabilir.
	Geri değer dönebiliriz return
	Bir fonksiyonda bir değişkene atanabilir.First class vatandaş..
	
 */

//Matematiksel Fonksiyonlar
 function f(x){
     return 2*x+2;
 }

 function g(x){
     return 3*x;
 }

 //f o g f(g(3))
 //f o g o f  f(g(f(4))) şeklinde kullanımlar olabilir.

 //Prosedurel Fonksiyonlar (Procedural)
 function selamla(){
     console.log("Merhaba");
     console.log("Nasılsınız?");
 }


 var h = function add(x,y){return x+y;}
 h(2,3) //Fonksiyonları bir değişkene atayabiliriz.Bu şekilde çağırırız.
