const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },
    ],

    imprimirResumo: function() {
        // let totalItens = 0;
        // let totalAPagar = 0;
    
        // for (const produto of this.produtos) {
        //     totalItens += produto.qtd;
        //     totalAPagar += produto.qtd * produto.precoUnit;
        // }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },

    imprimirDetalhes: function() {
        console.log (`Cliente: ${this.nomeDoCliente}`);
        for (const produto of this.produtos) {
            console.log(
                `Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },

    addProduto: function(produto) {
        const produtoExistente = this.produtos.find((p) => p.id === produto.id);
        
        if (produtoExistente) {
            produtoExistente.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },

// function addProdutoAoCarrinho (carrinho, produto) {
//     const produtoExistente = carrinho.produtos.find((p) => p.id === produto.id);

//     if(produtoExistente) {
//         produtoExistente.qtd += produto.qtd;
//     } else {
//         carrinho.produtos.push(produto);
//     }
// }

    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (const produto of this.produtos) {
            totalItens += produto.qtd;
        }
        return totalItens;
    },

    calcularTotalAPagar: function () {
        let totalPagar = 0;
        for (const produto of this.produtos) {
            totalPagar += produto.qtd * produto.precoUnit;
        }
        return totalPagar;
    },

    calcularDesconto: function () {
        const totalItens = this.calcularTotalDeItens();
        const totalAPagar = this.calcularTotalAPagar();

        let desconto = 0;

        // Desconto de um item mais barato se tiver mais de 4 itens
        if (totalItens > 4) {
            const itemMaisBarato = this.produtos.reduce((min, p) => (p.precoUnit < min ? p.precoUnit : min), this.produtos[0].precoUnit);
            desconto = itemMaisBarato;
        }

        // Desconto de 10% se o total a pagar for acima de R$ 100
        if (totalAPagar > 10000) {
            const desconto10porcento = totalAPagar * 0.1;
            desconto = Math.max(desconto, desconto10porcento);
        }

        return desconto;
    },
};

carrinho.imprimirResumo();

const novaBermuda = {
    id:2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000,
};
carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

// addProdutoAoCarrinho(carrinho, novaBermuda);
// carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000,
};
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
// addProdutoAoCarrinho(carrinho, novoTenis);
// carrinho.imprimirResumo();

console.log(`Desconto: R$ ${(carrinho.calcularDesconto() / 100).toFixed(2)}`);