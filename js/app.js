let totalGeral = 0;
let carrinhoDeCompras = [];
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').textContent = 'R$ 0';
limpar();

function adicionar() {
    // recuperar valores dos campos nome do produto, quantidade e valor:
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // alert(nomeDoProduto);
    // alert(valorUnitario);
    // alert(quantidade.value);

    // verificar se o produto selecionado é válido:
    if(!produto || produto.trim() === "") {
        alert('Por favor, selecione um produto válido.');
        return;
    }

    // verificar se a quantidade é válida:
    if(isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    //calcular o preço, o nosso subtotal:
    let preco = parseFloat(quantidade * valorUnitario);
    // alert(preco);

    // Verificar se o produto já está no carrinho:
    let produtoJaAdicionado = carrinhoDeCompras.find(item => item.nome == nomeDoProduto);  // chamada de expressão lambda
    if(produtoJaAdicionado) {
        // Se o produto já estiver no carrinho, atualizar a quantidade e o preço:
        produtoJaAdicionado.quantidade += quantidade;  // atualizar a quantidade do produto
        produtoJaAdicionado.valor = produtoJaAdicionado.valor + preco;  // atualizar o valor total do produto
    } else {
        let carrinhoProdutos = {
            nome: nomeDoProduto,
            quantidade: quantidade,
            valor: preco
        };

        carrinhoDeCompras.push(carrinhoProdutos)
    }  // primeira vez que o produto é adicionado, ele não existe no carrinho.

    // adicionar no carrinho:
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';  // limpar a lista antes de adicionar os produtos
    carrinhoDeCompras.forEach(item => {
        lista.innerHTML = lista.innerHTML + `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.valor.toFixed(2)}</span>
            </section>
        `;
    })

    // atualizar o valor total:
    totalGeral = parseFloat(totalGeral + preco);
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    // limpar o campo de quantidade:
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    carrinhoDeCompras = [];
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}