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
let number = prompt("Lütfen telefon numaranızı girin:", "0");
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
