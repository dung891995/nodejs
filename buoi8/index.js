// Cho các số 1,2,3,4 hãy thực hiện các các câu lệnh in theo thứ tự
// 	console.log(“1”)
// console.log(“2”)
// console.log(“3”)
// console.log(“4”)
// Yêu cầu thứ tự các dùng console phải theo thứ tự như trên vận dụng cách hiểu về eventloop hãy in các số trên theo thứ tự như trên, và chỉ được sử dụng các hàm theo yêu cầu trong dấu ngoặc đơn, không được thêm hoặc tự ý bớt các yêu cầu đó
// In ra các số theo thứ tự: 1,3,4,2 ( setTimeOut ). Số 2 được delay 2s sau mới đươc hiện ra, số 4 được delay sau 1s mới được hiện ra.
// console.log('1');
// setTimeout(function(){
//     console.log('2');
// },2000); 
// console.log('3');
// setTimeout(() => {
//     console.log('4');
// }, 1000);
// In ra các số theo thứ tự: 1,3,4,2 (dùng 1 function, setTimeOut ). Số 2 được delay 2s sau mới đươc hiện ra.
// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 2000);
// console.log('3');
// console.log('4');

// In ra các số theo thứ tự: 1,3,4,2 (dùng 2 function)
// console.log('1');
// so3();
// so4();
// console.log('2');
// function so3() {
//     console.log('3');
// }
// function so4() {
//     console.log('4');
// }
// In ra các số theo thứ tự: 2,1,4,3 (dùng 1 setTimeOut, 1 function). Số 3 sẽ được delay 1s mới được hiện ra
// so2();
// console.log('1');
// function so2() {
//     console.log('2');
// }
// setTimeout(() => {
//     console.log('3');
// }, 1000);
// console.log('4');
// In ra các số theo thứ tự: 2,1,3,4 (dùng 1 setTimeOut, 1 function). Số 3 và số 4 sẽ được delay 1s được hiện thị ra cùng 1 lúc.
// so2();
// console.log('1');
// function so2() {
//     console.log('2');
// }
// setTimeout(() => {
//     console.log('3');
// }, 1000);
// setTimeout(() => {
//     console.log('4');
// }, 1000); 
// In ra các số theo thứ tự: 2,1,3,4 (dùng 1 setTimeOut, 1 function). Khi gọi đến function thì function chưa được hiện luôn mà sau 2s mới in Số 3 và số 4
so2();
console.log('1');
function so2() {
    console.log('2');
}
setTimeout(() => {
    console.log('3');
    console.log('4');
}, 2000);