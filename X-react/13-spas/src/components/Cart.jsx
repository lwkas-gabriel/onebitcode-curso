import { Link } from "react-router-dom";

export default function Cart(){
    return (
    <section>
        <header>
            <nav style={{display: "flex", gap: "2rem"}}>
                <Link to="/">Início</Link>
                <Link to="/cart">Carrinho</Link>
                <Link to="/products">Produtos</Link>
            </nav> 
        </header>
        <h2>Carrinho</h2>
        <p>Os produtos atualmente em seu carrinho.</p>
        <ul>
            <li>2 un. - Memória RAM DDR4v 8GB</li>
            <li>1 un. - Processador Intel Core i3 12th Gen</li>
            <li>1 un. - SSD Sata 240 GB</li>
            <li>1 un. - Fonte ATX 500W</li>
            <li>1 un. - Placa Mãe Intel LGA 1700</li>
            <li>1 un. - Gabinete</li>
        </ul>
        <button>Finalizar compra</button>
    </section>
    )
}