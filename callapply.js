const person={
    firstName:'Ajay',
    lastName:'G',
getFullName: function (middleName) {
    
    console.log(this);
    
    return   `${this.firstName} ${middleName} ${this.lastName}`
    
    }
}
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.getFullName('kumar'));
    const john ={
        firstName:'john',
        lastName:'p'
    }
    console.log(john.firstName);
    console.log(john.lastName);
    console.log('----------------------------------------');
    const johnFullName =person.getFullName.call(john,'Abraham')
    console.log(johnFullName);

    //instead of person object */
    const johnFullName=person.getFullName.call(john,'Abraham')
    console.log(Full);

    console.log('---------------------------------------');
    