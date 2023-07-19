function Book(title, pages, tags, author){
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function addOnStock(qtd){
        this.inStock += qtd;
    }
    this.save = function(){
        //salva os dados no BD
    }
}

const author = {name: "Christopher Paolini"};
const tags = ["fantasy", "adventure", "medieval"];
const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eldest);