// tạo 1 promise 1 trả về resolve là 5
// tạo 1 promise 2 tăng giá trị trị lên 2 lần rồi trả về cho promise 3;
// promise 3 kiểm tra xem kết quả của promise 2 có chia hết cho 2 không
// rồi in ra thông báo
// var pr1 = new Promise(function (resolve, reject) {
//     resolve(5)
// })
// pr1.then(function(data) {
//     var value = data *2
//     return value;
// }).then(function(data){
//     if (data%2 == 0) {
//         console.log('pr2 có chia hết cho 2');
//     }else{
//         console.log('pr2 ko chia hết cho 2');
//     }
// })

// tạo 1 promise1 với tác vụ resovle sau 3 giây(dùng settimeout)
// tạo 1 promise2 tác vụ resolve sau 2 giây
// tạo 1 promise3 tác vụ reject sau 2 giây
// dùng Promise.all  để thực hiện song song tác vụ tiết kiệm time.
// var pr1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(1)
//     }, 3000);
// })

// var pr2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(2)
//     }, 2000);
// })

// var pr3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject(3)
//     }, 2000);
// })

// Promise.all([pr1, pr2, pr3])
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log('err: ', err);
//     })
// promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// 	in ra màn hình true hoặc false.

var pr1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(2)
    }, 3000);
})
pr1.then(function(data){
    setTimeout(() => {
        resolve(data*3);
    }, 3000);
    
}).then(function(data){
    console.log(data,'data');
    if (data >10) {
        console.log('lớn hơn 10');
        
    }else{
        console.log('nhở hơn 10');
    }
}) 