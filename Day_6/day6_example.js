/*

Gün 6 da döngüler konusuna giriş yapıyoruz döngüler aslında programlamanın temel taşlarından biridir.
Yani elimizde 0'dan başlayarak 100'e kadar sayılar var ve biz bu sayıları tek tek yazmak yerine bir döngü kullanarak bu işlemi yapabiliriz.
Yani aslında döngüler bize kodumuzu daha kısa ve okunabilir hale getirme imkanı sağlar.
Ayrıca döngüler sayesinde belirli bir işlemi belirli bir sayıda veya belirli bir koşul sağlandığı sürece tekrar edebiliriz.
İlk olarak for döngüsünü inceleyelim.

*/


// Gün 6: JavaScript Döngüler => for Döngüsü

//Genelde ekrana yazdırma işlemi için kullanılır
for(let i=0; i<5; i++){
    console.log('Merhaba Dünya', i);
}


// 0'dan 4'e kadar olan sayıların karelerini yazdırma
for (let i=0; i<5; i++){
    console.log(`${i} x ${i} = ${i * i}`);
}

// Diziler üzerinde for döngüsü kullanımı
const meyveler = ['Elma', 'Muz', 'Portakal', 'Mango'];
for (let i=0; i<meyveler.length; i++){
    console.log(meyveler[i]);
}

const ulkeler = ['Türkiye', 'Almanya', 'Fransa', 'İtalya', 'İspanya'];
const yeniDizi=[];
for (let i=0; i<ulkeler.length; i++){
    yeniDizi.push(ulkeler[i].toUpperCase());
}


/*
While Döngüsü
while anahtar kelimesinin yanında belirtilen şarta doğru olduğu sürece çalışan bir döngü türüdür. 
Eğer koşul sürekli doğru çıkacak şekilde ayarlanırsa while döngüsü uygulama kasten kesilmediği sürece sonsuza kadar devam edebilir. 
Bu yüzden buraya dikkat etmek gerekebilir.
*/

let i=0;
while (i<5){
    console.log('Merhaba Dünya', i);
    i++;
}


/*
Do...While Döngüsü
do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.

*/