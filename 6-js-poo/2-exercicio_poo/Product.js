class Product{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(qtd){
        this.inStock += qtd;
    }

    calculateDiscount(discount){
        const realDiscount = discount/100;
        return this.price * (1.0 - realDiscount);
    }
}

livro = new Product("teste", "teste", 100);
console.log(livro.calculateDiscount(14.5));