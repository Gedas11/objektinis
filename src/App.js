
// let user = {
//   name: ['Petras', 'Petraitis'],
//   age:36,
//   gender: 'Male',
//   interests: ['web technology', 'travelling'],
//   greeting: function (){     //geteris (mes gauname objekto varda)
//     console.log(`labas as esu${this.name[0]}`);

//   },
//   setAge:function (age){   //seteris
//     this.age=age;
//   }
// }


// console.log(user.name) //noriu isvesti objekto savybe
// user.age=33;  //bloga praktika
// user.setAge(55); //gera praktika
// console.log(user.age)
// user.greeting()    //noriu iskviesti objekto metoda

//-------------konstruktorius--------------------------------

// function CreateUser(name, email, active){  //konstruktorius
//     this.name = name;
//     this.email = email;
//     this.active = false;
// }


// CreateUser.prototype.showName = function(){   //Metodas
//   alert(`mano vardas yra ${this.name}`)
// }

// let userOne = new CreateUser('Petras', 'petras@gmail.com');
// userOne.showName()
// console.log(userOne)


import User from "./modules/User"

// let userOne = new User('petras', 'petras@gmail.com', 'IT')

// userOne.printInfo()

let newStudent = new Student('jonas', 'james@gmail.com', 'bit', 'js')

console.log(newStudent.getInfo())