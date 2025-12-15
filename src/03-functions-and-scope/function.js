// function test(){
//     console.log('test');
// }
// test();

// function test2(msg){
//     console.log('test -- '+ msg);
// }
// test2('hello world');

// function sum(a,b){
//     // console.log(arguments);
//     // console.log(a+b);
//     let total = 0
//     for(let num of arguments){
//         total+=num;
//     }
//     console.log(total);
// }
// sum(41,33,20,23,34,100, 22, 123,2344);

// Rest Operator
// function sum2(title, ...args){
//     let total = 0;
//     for(let num of args){
//         total+=num;
//     }
//     console.log(arguments);
//     console.log(args)
//     console.log(title + ':' + total);
// }
// sum2('Final Total is',41,33,20,23,34,100, 22, 123,2344);

// Default parameter
// function sum3(a,b=0,c=0){
//     // if (!a) {
//     //     a = 0;
//     // }
//     // if (!b) {
//     //     b=0;
//     // }
//     console.log(a+b+c);
// }
// sum3(2);

// getter, setter
// let person = {
//     firstName: 'ali',
//     lastName: 'karimi',
//     birthDate: new Date(),
//     get fullName(){
//         return `${person.firstName} -- ${person.lastName}`
//     },
//     set fullName(value){
//         if(typeof value !== 'string'){
//             throw new Error('value is not string')
//         }
//         const parts = value.split(' ');
//         if (parts.length !==2 ) {
//             throw new Error('please insert first and lastname');
//         }
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }
// person.fullName = 'hassan mohammadi';
// console.log(person.fullName);


function divide(a,b){
    if (!b) {
      throw new Error('b is invalid for divide by')  
    }
    console.log(a/b);
}

// divide(40,'masoud');
try{
    divide(40,0);
} catch(error){
    // console.log('inside catch', error);
}
console.log('after try');
