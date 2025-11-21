console.log(alert("Gün 5 Hoşgeldin!"));

// Gün 5: JavaScript Diziler
/*

Değişkenlerin aksine, diziler Çoklu değerleri depolayabilirler. 
Dizi'deki her bir değer index'e sahiptir, ve her index bellek adresindeki bir referans'ı işaret eder. 
Bu index'ler kullanılarak her bir değere ulaşım sağlanabilir. 
Bir dizinin index'i sıfır'dan başlar ve dizinin son elemanının index'i, dizinin uzunluğundan bir eksiktir.

Bir dizi, sıralı ve değiştirilebilirdir. 
Farklı veri türlerinin bir koleksiyonudur. 
Bir dizi, tekrar edilen elemanların ve farklı veri türlerinin depolanmasına izin verir. 
Bir dizi boş olabilir veya farklı veri türü değerlerine sahip olabilir.

*/


let array1 = ["Burak","Ece","Nur Sena","Meyra"];
console.log('Number of numbers: ',array1.length); // Dizinin uzunluğunu verir
console.log('First Element: ',array1[0]); // Dizinin ilk elemanını verir
console.log('Last Element: ',array1[array1.length - 1]); // Dizinin son elemanını verir


let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript); // Her karakteri ayrı bir eleman olarak diziye dönüştürür

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(", ");
console.log(companies); // Her şirketi ayrı bir eleman olarak diziye dönüştürür


const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const therdList = firstList.concat(secondList); //iki diziyi birleştirir

console.log(therdList); // [1, 2, 3, 4, 5, 6]

const numbers1=[1, 2, 3];

console.log(indexOf(2)); // 1 (Elemanın index'ini döner)
console.log(indexOf(0)); // -1 (Eleman bulunamazsa -1 döner)


const meyveler = ['Elma', 'Muz', 'Portakal', 'Mango'];
let index = meyveler.indexOf('Portakal');
if (index === -1){
    console.log('Meyve bulunamadı');
}else{
    console.log('Meyve bulundu index: ', index);
}


console.log(numbers1.includes(2)); // true (Eleman dizide var mı?)
console.log(numbers1.includes(0)); // false (Eleman dizide yok)