const Author = require("./Author");
const Post = require("./Post");
const Comment = require("./Comment");

let autor1 = new Author();
let novoPost_autor1 = autor1.createNewPost("qualquer porra");

let comentario1 = new Comment("teste1");
let comentario2 = new Comment("teste2");
let comentario3 = new Comment("teste3");

novoPost_autor1.addComment(comentario1);
novoPost_autor1.addComment(comentario2);
novoPost_autor1.addComment(comentario3);

console.log(novoPost_autor1);
