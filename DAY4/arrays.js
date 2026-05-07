let myArr = ['1', '2', '4', "true"];
console.log(myArr);
console.log("Accessing index 0>  "+myArr[0]);
myArr[0] = 10;
console.log("Modifing "+ myArr);
console.log("length of array " + myArr.length);


myArr.push(200);
console.log("push " + myArr);
myArr.pop();
console.log("pop " + myArr);