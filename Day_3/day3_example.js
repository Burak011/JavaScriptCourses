const pi=3.14; // pi sayısı sabiti
let yaricap=100; // Dairenin yarıçapı
let alan=pi*yaricap**2; // Dairenin alanı formülü
console.log("Dairenin alanı: " + alan);


const yerCekimi=9.81; // m/s² cinsinden yerçekimi ivmesi
let kutle=72; // kg cinsinden kütle
let agirlik=kutle*yerCekimi; // Ağırlık formülü
console.log("Nesnenin ağırlığı: " + agirlik + " N");



const kaynamaNoktasi=100; // Suyun kaynama noktası (°C)
const bodyTemp=37; // İnsan vücudu sıcaklığı (°C)
console.log(`Suyun kaynama noktası ${kaynamaNoktasi} °C ve insan vücudu sıcaklığı ${bodyTemp} °C.`);

// Window alert metodu kullanımı 

alert("Merhaba! 30 Günlük JavaScript Challenge'a Hoş Geldiniz!");
/* 
aslında kullanıcı ile etkileşim kurmak için kullanılır
    ancak günümüzde pek tercih edilmez
    çünkü kullanıcı deneyimini olumsuz etkiler
    mümkün olduğunca kullanmaktan kaçınmak gerekir
*/
// Window prompt metodu kullanımı
/*
Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler
giriş verileri bir değişkende saklanabilir. prompt() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.
*/
let number = prompt("Lütfen telefon numaranızı girin:", "5555555555");
console.log("Girilen telefon numarası: " + number);


// Winow Confirm metodu kullanımı
const agree = confirm("Eğer 30 Günlük JavaScript Challenge'a katılmak istiyorsanız Tamam'a tıklayın.");
console.log(agree); // true veya false döner
/*
---> confirm() yöntemi, bir Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler.
---> Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır.
---> Pencere confirm() argüman olarak bir dize alır.
---> Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak yanlış değeri verir.
*/
// Date nesnesi kullanımı

const now = new Date();
console.log(now); // Şu anki tarih ve saat
console.log("Yıl: " + now.getFullYear()); // Yıl
console.log("Ay: " + (now.getMonth() + 1)); // Ay (0-11 arası, bu yüzden 1 ekliyoruz)
console.log("Gün: " + now.getDate()); // Ayın günü
console.log("Saat: " + now.getHours()); // Saat
console.log("Dakika: " + now.getMinutes()); // Dakika
console.log("Saniye: " + now.getSeconds()); // Saniye
console.log(now.getTime()); // 1 Ocak 1970'ten bu yana geçen milisaniye cinsinden zaman


// Exercise 1:
// 1
let firstName = "Burak";
let lastName = "Çelikten";
let country = "Türkiye";
let city = "İstanbul";
let age = 22;
let isMarried = false;
let year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log(`İsim: ${firstName}, Soyisim: ${lastName}, Ülke: ${country}, Şehir: ${city}, Yaş: ${age}, Evli mi?: ${isMarried}, Yıl: ${year}`);
// 2
console.log('10' == 10);
console.log(parseInt('9.8') == 10);
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4==='4');
console.log(4=='4');
//3
console.log('Bugün yıl :', year);
console.log(`Bugün ayın ${now.getDate()}. günü`);
console.log(`Bugün tarihi: ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`);

// Exercise 2:
/* Problem-1: Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanının
hesaplanmasını isteyen bir komut yazınız. (formül=0.5*b*h) */
let taban = prompt("Lütfen üçgenin taban uzunluğunu giriniz:");
let yukseklik = prompt("Lütfen üçgenin yüksekliğini giriniz:");
let ucgenAlani = 0.5 * parseFloat(taban) * parseFloat(yukseklik);
console.log("Üçgenin alanı: " + ucgenAlani);

/*Problem-2: Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin
çevresini hesaplamasını isteyen bir komut dosyası yazın. (çevre=a+b+c)  */
let a = prompt("Lütfen üçgenin a kenar uzunluğunu giriniz:");
let b = prompt("Lütfen üçgenin b kenar uzunluğunu giriniz:");
let c = prompt("Lütfen üçgenin c kenar uzunluğunu giriniz:");
let ucgenCevresi = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log("Üçgenin çevresi: " + ucgenCevresi);




