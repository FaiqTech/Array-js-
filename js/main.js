//* 2. Bir sıra klonlaşdırmaq üçün JavaScript funksiyası yazın.

var array_Clone = function (array) {
  return array.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//* Bir sıra tam ədədlərin cəmini və hasilini hesablamaq üçün JavaScript proqramı yazın.

var array = [1, 2, 3, 4, 5, 6],
  cem = 0,
  hasil = 1,
  i;
for (i = 0; i < array.length; i += 1) {
  cem += array[i];
  hasil *= array[i];
}
console.log("cem : " + cem + " hasil :  " + hasil);

//* 22. İki arrayin birlesmesini hesablamaq üçün JavaScript proqramı yazın.

function unionArray(arr1, arr2) {
  //Set obyekti tək bir dəyər tələb edir və təkrarlanan dəyərləri qəbul etməz.
  //Array.from() metodu, iterable bir obyekti (kimi array və ya set kimi)
  //bir array-ə çevirmək üçün istifadə olunan bir JavaScript metoduğudur.
  var resultArray = Array.from(new Set([...arr1, ...arr2]));
  return resultArray;
}

var arr1 = [1, 2, 3];
var arr2 = [100, 2, 1, 10];

var birləşmişNəticə = unionArray(arr1, arr2);

console.log("unionArray : " + birləşmişNəticə);
