class Person {
    constructor(Firstname,Lastname,age) {
        this.Firstname = Firstname
        this.Lastname = Lastname
        this.age = age
    }
    getFullName(){
        console.log(`${this.Firstname}${this.Lastname}`)
    }
}

class Student extends Person {
    constructor(Firstname,Lastname,age,grade) {
        super(Firstname,Lastname,age)
        this.grade = grade
    }
}


let s1 = new Student("Thad", "Cosley", 16, 11)
