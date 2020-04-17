// cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
// bài 1: // * in ra các số chẵn
// bài 2: // * in ra các số lẻ  
// bài 3: // * in ra các số lớn hơn hoặc bằng 5
// bài 4:// *in ra các số chia hết cho 5
// bài 5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// //var doan = {
//    name: 'Doan',
//     age: 22,
//     salary: 10000
// }
// var trung = {}
//  // Đoàn là 1 master javascript lương 10k đô, Trung idol Đoàn, 
// //   quyết định clone mọi thứ từ Đoàn
// //Hãy giúp Trung clone mọi thuộc tính trong vòng 1 nốt nhạc.
// //  Để phân biệt thì Trung sẽ thêm 1 property: clone = true
// //  (Lưu ý: thay đổi object k làm ảnh hưởng tới Đoàn)
// // {
// //     name: 'Trung',
// //     age: 22,
// //     salary: 10000,
// //     clone: true 
// // }
var array = [1, 5, 7, 8, 9, 15];
var soChan = array.filter(function (value) {
    return value % 2 == 0
}); console.log('in ra so chan ' + soChan);

var soLe = array.filter(function (value) {
    return value % 2 !== 0
}); console.log('in ra so le ' + soLe);

var soLonHon5 = array.filter(function (value) {
    return value >= 5
}); console.log('so >= 5 la ' + soLonHon5);
var soChiaHet5 = array.filter(function (value) {
    return value % 5 == 0
}); console.log('so chia het cho 5 la ' + soChiaHet5);
var bai5 = array.filter(a => a > 5).map(a => a + 1); console.log(bai5);
//
var doan = {
    name: 'Doan',
    age: 22,
    salary: 10000
}
var trung = Object.assign({},doan)
trung.name = 'Trung';
trung.clone = true
console.log(trung);