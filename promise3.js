console.log('program started');
let age = 0
function agePromise(){
    return new Promise((resolve,reject)=>{
        console.log(age);
        if(age >= 18){
            resolve('Eligible for voting')
        }else {
            reject('not eligible for voting')
        }
    })
}

        // agePromise().then((success)=>{
        //     console.log(success);
        // }).catch(err =>{
        //     console.log(err);
      //  });
        function validDateAge(){
            age = document.getElementById('age').value
            agePromise().then((success)=>{
                console.log(success);
            })
        }
    

    