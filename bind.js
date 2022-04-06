const teacher={
    firstName:'Ajit',
    lastName:'k',
    getFullName :function(age,subjects){
        console.log(this);
        console.log('age',age);
        console.log('subjects',subjects);
        return `${this.firstName}${this.lastName}`
    }
}
const guru={
    firstName:'guru',
    lastName:'l',
}
/* create a copy of the getfull and it returns that function and this
will be pointing to the object passed as first parameter*/

const getFullNameFunc = teacher.getFullName.bind(guru,10)
getFullNameFunc(['english'])
getFullNameFunc(['English','kannada'])
getFullNameFunc(['English','kannada'])