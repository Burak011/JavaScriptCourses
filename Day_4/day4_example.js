// Exercise-1:

let age=prompt("Enter your age:");
if(age>130){
    console.log("Çok yaşlısınız belge alamazsınız.");}
else if(age<18){
        console.log("Araç belgesi alma yaşında değilsiniz.");}
else if(age>=18){
        console.log("Araç belgesi alma yaşındasınız.");}
else{
    console.log("Lütfen geçerli bir yaş giriniz.");}



// Exercise-2:
let benimYasim=23;
let seninYasin=prompt("Senin yaşın kaç?");
if(benimYasim>seninYasin){
    console.log("Ben senden "+(benimYasim-seninYasin)+" yaş büyüğüm.");}
else if(benimYasim<seninYasin){
    console.log("Sen benden "+(seninYasin-benimYasim)+" yaş büyüksün.");}
else if(benimYasim==seninYasin){
    console.log("Yaşlarımız eşit.");
}
else{
    console.log("Lütfen geçerli bir yaş giriniz.");
}


// Exercise-3:
/* Bir aydaki gün sayısını söyeleyen bir program yazın ex.(Temmuz 31 gün veya Şubat 28 gün) */
let month=prompt("Bir ay ismi giriniz:");
month=month.toLowerCase();
switch(month){
    case "ocak":
    case "mart":
    case "mayıs":
    case "temmuz":
    case "ağustos":
    case "ekim":
    case "aralık":
        console.log(month+" ayı 31 gündür.");
        break;
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasım":
        console.log(month+" ayı 30 gündür.");
        break;
    case "şubat":
        console.log(month+" ayı 28 veya 29 gündür.");
        break;
    default:
        console.log("Lütfen geçerli bir ay ismi giriniz.");
}
    