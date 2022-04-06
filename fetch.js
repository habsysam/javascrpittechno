const url="https://jsonplaceholder.typicode.com/posts"
const fetchPosts=()=>{
    fetch(url).then((response)=>{
        console.log(response);
        return response.json()
    }).then((data)=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
        console.log(err.message);
    })
}
fetchPosts()

