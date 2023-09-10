class Post{
    constructor(postText, author){
        this.postText = postText;
        this.postList = [];
        this.author = author
    }

    addComment(comment){
        this.postList.push(comment);
    }
}

module.exports = Post;