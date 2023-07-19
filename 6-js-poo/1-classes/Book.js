class Book{
    constructor(title){
        this.title = title;
        this.published = false;
    }

    publish(){
        this.published = true;
    }
}

const eragon = new Book("Eragon");
const eldest = new Book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);

// retorna true se o objeto é do mesmo tipo
// retorna false se não;
console.log(eragon instanceof Book);