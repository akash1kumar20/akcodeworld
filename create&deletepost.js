const posts = [
    {name:"post one"},
    {name:"post two"},
    {name:"post three"},
    {name:"post four"}
]

const construction =  async () => {
    const createPost = new Promise ((resolve,reject) => {
        let post;
        posts.push(post)
        resolve(post);
    });

    const updateUserActivity = new Promise ((resolve,reject) => {
        setTimeout(() => {

            let lastActivity = new Date()
            console.log(`Last seen : ${lastActivity}`)
            resolve()

        },1000);
    });

    const deletePost = new Promise ((resolve,reject) => {
        if(posts.length > 0){

            const del = posts.pop()
            resolve(del)

        }
        else{
            reject("ERROR")
        }
    }) 
    let post = await construction ;
    let print = await Promise.all([createPost,updateUserActivity,deletePost]);
    
    // console.log(print);
    return post;
}
construction().then((t) => console.log('User activity updated'));