const Post = require("./Post");

class Author{
    constructor(){
        this.authorPosts = [];
    }

    createNewPost(texto){
        const newPost = new Post(texto, this)
        this.authorPosts.push(newPost);
        return newPost;
    }
}

module.exports = Author;