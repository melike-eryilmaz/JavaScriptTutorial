/**
 * ARTIHMETIC OPERATORS
 * / * + - ++ -- %
 * LOGIC OPERATORS
 * && VE 
 * || VEYA
 * KARŞILAŞTIRMA OPERATÖRLERİ
 * <
 * >
 * <=
 * >=
 * ==
 * !=
 */

 if(havaYagmurluMu && evdeSemsiyeVarmi){
     semsiyeyiAl
     arabaVarmi ? arabaylaİseGit : yuruyerekIseGit
 }else if(havaYagmurluMu && !evdeSemsiyeVarmi){
     iseGitme
 }else{
     arabaVarmi ? arabaylaIseGit : yuruyerekIseGit
 }

 var arabasayisi=5;
 switch(arabasayisi){
     case 1:
         console.log("Araban güzelmiş");
         break;
     case 2:
        console.log("Araban güzelmiş birini versene :)");
        break;
     default:
        console.log("Default");
        break;
 }

 /**
  * Bir fonksiyon kendisini çağırıyorsa buna recursive fonksiyon denir.
  */
 var i =10;
 function hello(){
    console.log("merhaba")
    if(i>0){
        merhaba(i-1);
    }
 }

 var k =0;
 while(k<0){
     console.log("merhaba");
     k+=2;

 }

 do{
     console.log("merhaba");
     k+=2;
 }
 while(k<0)

 for(var j=5;j<10;j+=2){
     console.log("Merhaba");
 }

var m = 0;
 while(true){
     if(m ==5){
         m++;
         continue;
     }
     console.log("Merhaba");
     m++;
     if(m == 10) break;
     i++;
 }

 /**
  * Regular expressions : Düzenli İfadeler.
  * Kendi içerisinde düzeni olan bir ifadeyi koddan çekip alabilirim.
  * +90 555 300 8080
  * Regex ifadeler // arasına yazılır.
  */

  var phoneRegex = /(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/
  var cumle = "Benim telefon numaram +90 536 854 75 12 dir."
  phoneRegex.test("+90 536 854 75 12 ") // şeklinde tarayıcıda test edilebilir.
  cumle.match(phoneRegex);//şeklinde cumle içerisindeki eşleşen regexi dışarıya alabiliriz.
  cumle.replace(phoneRegex,'********');//Regex ile eşleşen ifadeyi gizlemek istersek replace kullanabiliriz.

