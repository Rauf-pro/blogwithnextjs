
const baseURL = "http://localhost:3000/api/posts"
// const baseURL = "http://localhost:3000/"


// endpoint: api/posts  as endpoint: http://localhost:3000/api/posts
// endpoint: api/posts  as endpoint: http://localhost:3000/


export default async function getPost(id){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()
     
    if(id){
        return posts.find(value => value.id == id)
    }
    return posts;
}


// or
// export default async function getPost({params}){
//     const res = await fetch(`${baseURL}${params}`)
// }


