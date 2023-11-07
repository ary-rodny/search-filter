
const input = document.getElementById('search')
const displayDiv = document.getElementById('display')
let globalPosts = []

//
const displayPosts = (posts) => {
    displayDiv.innerHTML = ""
     posts.forEach((post,index) => {
        let div = document.createElement('div')
        div.className = "post"

        let num = document.createElement('h1')
        num.textContent = index +1
        div.appendChild(num)

        const title = document.createElement('h3')
        title.textContent = post.title;
        div.appendChild(title)

        const body = document.createElement('p')
        body.textContent = post.body
        div.appendChild(body)

        displayDiv.appendChild(div)
        
    })
}

//
const getPosts = (async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await res.json();
    globalPosts = data.map((p) => p)
    displayPosts(data)
})()


//
input.addEventListener('input', (e) => {
    let text = e.target.value;
    
    if(e.target.value != ""){
        let results = globalPosts.filter((post => post.title.toLowerCase().startsWith(text.toLowerCase(),0)))
        displayPosts(results)
    }
    else{
        displayPosts(globalPosts)
    }
})




