//fetchpost
const url="https://jsonplaceholder.typicode.com/posts"

function savePost(){
    const post={
        userId:1000,
        title: 'javascript end game',
        body:' javascript javascript'
    }
    fetch(url,{
        method : 'POST',
        boby:JSON.stringify(post),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>{
        console.log(response);
        return response.json()
    }).then(data =>{
        console.log('Added post', data);
    })

}

 