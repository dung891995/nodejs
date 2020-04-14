// nhan 2 chuoi array
var array = [1, 5, 7, 8, 9, 15, 8];

for (let i = 0; i < array.length; i++) {
    // console.log(array[i] *2);
}
// in ra các số chẵn của mảng
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        // console.log(array[i]);
    }
}

//in ra các số lẻ  của mảng
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        // console.log(array[i]);
    }
}

//* in ra các số lớn hơn hoặc bằng 5 của mảng
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
        // console.log(array[i]);
    }
}
// Cộng tổng các số chia hết cho 5 của mảng
var tong = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0) {
        tong += array[i]
    }
}
// console.log(tong);

//Tìm ra tích 3 số đầu của mảng array (dùng 2 cách : if...else và for)
//cach1
var tich = 1;
// for (let i = 0; i < 3; i++) {
//     tich *= array[i];
// }

//cach2
// for (let i = 0; i < array.length; i++) {
//     if (i < 3) {
//         tich *= array[i];
//     } 
// }console.log(tich);

//Tìm xem trong array có phần tử nào là số 5 không?

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 5) {
//         console.log('Phan tu thu ' + i);
//     }
// }
//  Cho obj = {
// 	firstName: ‘Đỗ’,
// 	lastName: “Hao”,
// 	name:“Họ của tôi là ... còn tên của là ...”
// }
// Hãy điền vào dấu … để object hiển ra như sau : 
//  Cho obj = {
// 	firstName: ‘Đỗ’,
// 	lastName: “Hao”,
// 	name:  “Họ của tôi là Đỗ còn tên của là Hao”
// }
// Lưu ý: các giá trị của dấu … là lấy value của firstName và lastName

var obj = {
    firstName: 'Đỗ',
    lastName: 'Hao',
    
}
var obj1 ={
    name:'Họ của tôi là ' +obj.firstName + ' còn tên của là ' +obj.lastName
}
console.log(obj1);