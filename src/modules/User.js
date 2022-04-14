class User{
    constructor(name, email, department){
      this.name = name;
      this.email = email;
      this.department = department;
    }
    printInfo(){
     console.log(`sveiki as esu ${this.name}. 
     mano el pastas yra : ${this.email}. Dirbu ${this.department}`)
    }
  }


  export default User