// / const obj = {
    //   name: "ogogo",
    // };
    
    // let name = "asdasd";
    
    // let name2 = name;
    // name2 = "ggg";
    // console.log(name);
    // console.log(name2);
    // const arr = [123, 12312, 3123, 123];
    // const arr2 = arr;
    // arr2[4] = "222";
    // console.log(arr2);
    // console.log(arr);
    
    // const arr3 = [...arr];
    // arr3[5] = "999";
    // console.log(arr3);
    
    // const obj2 = obj;
    
    // obj2.firstName = "sss";
    // const obj3 = { ...obj };
    // obj3.car = "ttt";
    
    // console.log(obj2);
    // console.log(obj);
    // console.log(obj3);
    
    //This
    // const user = {
    //   name: "Danil",
    //   lastName: "Panarin",
    //   age: 25,
    //   position: "Frontend",
    
    //   getName: function () {
    //     console.log(Привет всем я, ${this.name});
    //   },
    
    //   getAge: function () {
    //     console.log(Мне ${user.age} лет);
    //   },
    // };
    // user.getName();
    // user.getAge();
    
    // const user2 = { ...user };
    // user2.name = "Ogogo";
    // console.log(user2);
    // console.log(user2.getName);
    // user2.getName();

    


// let mul = (a,b) => a*b 


// console.log(mul);


//    const user = {
//       name: "Nurdin",
//       lastName: "Dee",
//       age: 25,
      
    
//       getName: function () {
//         console.log(this.name);
//       },
    
//       getAge: function () {
//         console.log(user.age);
//       },
//     };
//     alert("Hello World")
//     user.getName();
//     user.getAge();


//forEach()

// const arr = [2, 10, 15, 22];

// arr.forEach((z,x,c) => {
//   console.log(z)
// })
// arr.map((item, index) => {
//   console.log(item * 2 / 5)
// })

// const newArr = arr.filter((item, index) => {
//   return item > 10
// })

let str = 'Ivan, Misha, Oleg, Andrei';

const filterStr = str.split(', ')
console.log(filterStr)
let index = filterStr.indexOf('Oleg', 1)
console.log(index)


