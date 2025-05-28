// let totalGeral = 0;
let totalGeral;
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').textContent = 'R$ 0';
limpar();

function adicionar() {
    // recuperar valores dos campos nome do produto, quantidade e valor:
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;
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

    // adicionar no carrinho:
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
        </section>
    `;

    // atualizar o valor total:
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    // limpar o campo de quantidade:
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}