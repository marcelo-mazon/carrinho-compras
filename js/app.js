let valorTotal; // Variável global para armazenar o valor total
limpar();

function adicionar() {
    // Obter o valor do produto selecionado
    const listaDeProdutos = document.getElementById('produto');
    const produtoSelecionado = listaDeProdutos.value;

    // Validar o produto selecionado
    if (!produtoSelecionado || produtoSelecionado === "" || !produtoSelecionado.includes(" - R$")) {
        alert("Por favor, selecione um produto válido");
        return;
    }

    // Separar o valor em nome do produto e preço
    const [nomeProduto, precoProduto] = produtoSelecionado.split(' - R$');
    const preco = Number(precoProduto); // Converter preço para número, ex.: 1400

    // Obter a quantidade
    const entrada = document.getElementById("quantidade");
    const quantidade = Number(entrada.value); // Converter quantidade para número

    // Validar a quantidade
    if (quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida (maior que 0)");
        return;
    }

    // Adicionar o produto ao carrinho
    const carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    
    // Atualizar o valor total
    valorTotal += quantidade * preco; // Somar o valor do novo produto
    const elementoTotal = document.getElementById("valor-total");
    elementoTotal.textContent = `R$${valorTotal}`; // Atualizar o elemento com o novo total

    // Limpar o campo de quantidade
    entrada.value = "";
}

function limpar() {
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0";

    // Limpar o campo de quantidade
    document.getElementById("quantidade").value = "";
}