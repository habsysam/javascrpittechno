//get
const url="https://jsonplaceholder.typicode.com/posts"
const fetchPosts=()=>{
    fetch(url).then((response)=>{
        console.log(response);
        return response.json()
    }).then((data)=>{
        console.log(data);
        let postData='<ul> '
        data.map((post)=>{
            //template literals (es6)
            postData +=`<li>${post.title}</li>`
        })
        postData +='</ul>'
        const divElement= document.getElementById('users')
        divElement.innerHTML= postData 
        console.log('postsData',postData);
    }).catch(err=>{
        console.log(err);
        console.log(err.message);
    })
}
fetchPosts()