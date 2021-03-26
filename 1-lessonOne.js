/** Bu sayfada temel olarak javascript den bahsedilmektedir.*/
/**
 * Javascript nedir?
	Javascript bir programlama dilidir.
	Tamamen tarayıcı üzerinde action almak için çıkarılmıştır.
	Html de belirli bir kümeleme düzeni var.
	Html ile Layout denen bir dizilim yapılır.
	Webde ise html in kullanıcı iletişime geçmesi gerekiyor.
	Bu yüzden javascript çıkarılmıştır.
	Javascriptin işletim sisteminde çalışması yeni bir şeydir.
	V8 Motoru sayesinde chrome da javascript kullanılabiliyor.
	Javascript ECMASCRİPT 6 versiyonuyla kullanılabilir.
	İşletim sistemi ise v8 motorunun işletim sistemi seviyesinde çalıştırılmasıyla 
	terminalde çalışabilir hale geliyor.
	Javascript ES5 ile başlayacak.
 */
/**
 * Küçük harf duyarlılığı :
	A ve a programlama dillerinde farklı şeylerdir.
	Javascript dosya uzantıları .js olarak kaydedilir.
 */
/**
 * Yorum Satırları :Kodun karmaşık yerlerinde ne iş yaptıgını anlatmak için yazılır.
	Yorumlayıcı // gördükten sonra satır sonuna kadar çöpe atar.
	Comment out --Kodun işlenmesi istenmediğinde ama silmek istenmediğinde yapılır.
    Birden fazla satır yorum satırı yapmak için / * * / şeklinde kullanılır.
	Annotation : Belirteçler ile fonksiyonları açıklamak içinde kullanılır.

 */
/**
 * ; ve ASI
	; Bir komutun bittiğini belirtir.Yorumlayıcıya bildirir.
	javascript de zorunlu bir belirteç değildir.
	Automatic Semicolon İnsertion -ASI-Otomatik ; ekleme
	Javascript de ASI vardır.Alt satır karakterini yeni komut kabul eder.

Kod Yazım Şekilleri 
//Alman style 
	function fonksiyon()
	{
			return 
				{
				adi:"fatih"
				
				}
	}
// K&R 1TBS javascript kod yazma stilidir.

	function fonksiyon(){
		return {
			adi:"fatih"
			
			}
	}
 */
var lesson = "Javascript"
var Lesson = "Code"

/**
 * Parantez ve Tırnak işaretleri
 * Parantezler
	Parantezler belirli kod gruplarını tanımlamak için kullanılır.
	() matematiksel işlemlerde gruplama için kullanılır.
	İşlem önceliklerinde kullanılır.
	Fonksiyonlara parametre belirleme kısımlarında kullanılır.
	{} parantez ise scop kısmını belirtir.
	if else yazarken de if bloğu ve else bloğu için kullanılır.
	Obje tanımlarında kullanılır.
	[] dizilerde kullanılır.
	
	Tırnak İşaretleri
	"Fatih"
	'Fatih'
	Javascript de "" ve '' farklı değildir.
	"fat\"ih" yorumlayıcıya kaçırmak için \ escape kullanılır.
	' "' kullanılabilir.
	'\'' şeklinde kullanılabilir.
	`` Stringleri multiline yapmamızı sağlar.
 */

 var operation = 2*3+5;
 var operation1 = 2*(3+5);

 function fonksiyon(){
 }

 if(true){
    //Doğruysa

 }
 else{
    //Yanlışsa
 }

 var kisi ={
     adi:"Fatih",
     sayodai:"Atar"
 }

 [operation,operation1]

 "Fatih"
 "Fat\"ih"  //Tırnak işareti içerisinde tekrar " kullanmak istersek bunu yorumlayıcı bitiş olarak algılamaması için \ escape karakteri kullanırız.
 'Fatih'
 'Fat\'ih'

 "Sonuc "+operation1+" dir."

 `Sonuc
    ${operation1} dir.` //Birden fazla satırda string ifade yazabiliriz .Değişkenleri içeriye ${} ile alabiliriz.

/**
 * Anlamlı Kaynak Kodu
	Kodumuz okunabilir ve düzenlenebilir olmalıdır.
	Her tarafa yorum yazılamaz bu yüzden kod anlaşılır yazılmalıdır.
 */
/**
 * İsimlendirme Çeşitleri
		Camelcase
		SnakeCase
		KebabCase
		
		camelCase:
			Deveden gelir.
			İlk harf büyük diğerleri küçük ve ilk harf küçük diğerleri büyük şeklinde iki türü vardır.
			function kampanyasiBitmisUrunlerinIDleriniGetir(){}
		SnakeCase:
			Kelime aralarında underscore kullanılarak yapılır.
			function kampanyasi_bitmis_urunlerin_idlerini_getir(){}
		KebabCase:
			Kelime aralarında - kullanılarak yapılır.
			function kampanyasi-bitmis-urunlerin-idlerini-getir(){}
		
		Javascript de camelCase isimlendirme şekli kullanılır.
		Fonksiyonlar küçük harf ile classlar büyük harf ile başlatılır.
 */
/**
 * Indentation -Girintileme
	Javascript de indentation zorunlu değildir fakat yapılması gereklidir.
	Javascript de 2 space indent kullanılır.
	Tab size ayarlanabilir.
 */
/**
 * Geçici ve Özel Değişkenler
	_variable  :Değişkenin geçici oldugunu belirtir.
 */

 var _i=0;
 while(i<10){
     console.log("Merhaba");
     _i++;

 }

 function getUser(){
     var _currentUserId=getUserId();
     getUser(`/user/${_currentUserId}`);
 }

 var a=3;
 var b=6;

 _tmp = a;
 var a = b;
 var b = _tmp;
 
