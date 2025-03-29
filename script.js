// //Base Class
// class Collage{
//     constructor(name, rollNumber, img) {
//         this.name = name;
//         this.rollNumber = rollNumber;
//         this.img = img;
//     }

//     studentName() {
//         console.log(this.name);
//     }

//     studentNumber() {
//         console.log(this.rollNumber);
//     }

//     studentImg() {
//         console.log(this.img);
//     }
// }
// const detils =new Collage("Panda","22400437","Assets/img4.jpeg");
// detils.studentName();
// detils.studentNumber();
// detils.studentImg();


//interitens

// class Collage{
//     constructor(name, rollNumber, img) {
//         this.name = name;
//         this.rollNumber = rollNumber;
//         this.img = img;
//     }

//     studentName() {
//         console.log(this.name);
//     }
// }

// class Student extends Collage {
//     constructor(name, rollNumber, img ,from){
//         super(name,rollNumber,img);
//         this.from = from;
//     }
//     show(){
//         console.log(`My name is ${this.name},roll number is ${this.rollNumber}, imeage is ${this.img} and form is ${this.from} `)
//     }
// }

// const detils =new Student("Panda","22400437","Assets/img4.jpeg","India");
// detils.show();

// setter and getter

// class IndianBank{
//     constructor(name , mobile){
//         this.name = name;
//         this.mobile = mobile;
//     }
//     get detils(){
//        return this.name
//     }

//     set change(mobiles){
        
//        return this.mobile=mobiles   
//     }

//     mobiles(){
//       return  console.log(this.mobile);   
//     }

// }

// const user = new IndianBank("naveen","9585961005");
// user.change='1234567890'
// user.mobiles()
// console.log(user.detils);

// encapsulation

// class BankAccount{

// #balance;

// constructor(accountNumber, accountHolderName, balance){
//     this.accountNumber = accountNumber;
//     this.accountHolderName = accountHolderName;
//     this.#balance = balance;
// }

// show(){
//     console.log(this.#balance);
// }
// get reminderbalance(){
//     return this.#balance;
// }

// set addbalance(balance){
//     return this.#balance = balance;
// }
// }

// let user = new BankAccount("123456", "John Doe", 1000);
// // user.addbalance = 4000;
// user.show();
// // console.log(user.reminderbalance);


// polimarpisam


// class School{
//     constructor(name, rollNo, mobileNo){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.mobileNo = mobileNo;
//     }

//     show(){
//         return this.mobileNo;
//     }
// }

// class Govt extends School{
//     constructor(name, rollNo, mobileNo){
//         super(name, rollNo , mobileNo)
//     }
//     show(){
//         return this.mobileNo ="non";
//     }
// }


// let student = new Govt("Naveen",22400437,9585961005);
// console.log(student.show());

//Static

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(username) {  
//       return username + "Kumar";
//     }
// }
// console.log(Person.hello('naveen'));   
