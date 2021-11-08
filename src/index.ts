// [1]  if class which inherit from user havnt constructor
// then it will use inherited constructor

// class User {
//   constructor(protected id: number, public name: string, public age: number) {}
// }

// class Admin extends User{

// }

// let admin = new Admin(123432,'mido',27)

// [2] if inherited class have his constructor then
// should call super function inside it to can make
// object from class thats we inherit from it
class User {
  constructor(public id: number, protected name: string, private age: number) {}
}

class Admin extends User {
  constructor(public uuuid: number) {
    //     A 'super' call must be the first statement in the constructor when a class contains initialized properties, parameter properties, or private identifiers.ts(2376)
    //    'super' must be called before accessing 'this' in the constructor of a derived class
    super(uuuid, "mido", 27);
  }
}

let admin = new Admin(1231231);
console.log(admin.name); // run time err// protected cannot be called from obj context
// protected can be used in class
console.log(admin.age); // run time err// // private cannot be called from obj context
console.log(admin.id); // public can be called from obj context

// [3]
//  [A] private cannot be inherited cannot be called from instance context
//  [B] protected can be inhertied cannot be called from instance context
//  [C] public can be inhertied , can be called from instance context
//  [D] readonly can be inherited , can be called from  instance context
//      cannot be change after first inti in constructor
