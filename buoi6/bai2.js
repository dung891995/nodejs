var array = [1,5,7,8,9,15,8];

for (let i = 0; i < array.length; i++) {  
    // console.log(array[i] *2);
}
//*

for (let i = 0; i < array.length; i++) {  
    if (array[i] %2 == 0) {
        // console.log(array[i]);
    }
}

//*
for (let i = 0; i < array.length; i++) {  
    if (array[i] %2 !== 0) {
        // console.log(array[i]);
    }
}

//* ok
for (let i = 0; i < array.length; i++) {  
    if (array[i] >= 5 ){
        console.log(array[i]);
    }
}
