// caixa-da-lanchonete.js

const cardapio = [ 
    { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
    { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
    { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
    { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
    { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
    { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
];

function calcularValorDaCompra(itens, formaDePagamento) {
    // Implemente a lógica aqui
}

module.exports = {
    calcularValorDaCompra
};

//calcularValorDaCompra

function calcularValorDaCompra(itens, formaDePagamento) {
    const formaDePagamentoValidas = ['dinheiro', 'debito', 'credito'];
    const itemPrincipalNaoRequerido = ['chantily', 'queijo'];
    
    if (!itens || itens.length === 0) {
        return "Não há itens no carrinho de compra!";
    }

    let valorTotal = 0;

    for (const itemPedido of itens) {
        const itemCardapio = cardapio.find(item => item.codigo === itemPedido.codigo);

        if (!itemCardapio) {
            return "Item inválido!";
        }

        if (itemPrincipalNaoRequerido.includes(itemPedido.codigo)) {
            const itemPrincipal = cardapio.find(item => item.codigo === itemPedido.codigo.replace('extra', ''));
            if (!itens.some(item => item.codigo === itemPrincipal.codigo)) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        valorTotal += itemCardapio.valor;
    }

    if (!formaDePagamentoValidas.includes(formaDePagamento)) {
        return "Forma de pagamento inválida!";
    }

    if (formaDePagamento === 'dinheiro') {
        valorTotal *= 0.95; // Aplica o desconto de 5% para pagamento em dinheiro
    } else if (formaDePagamento === 'credito') {
        valorTotal *= 1.03; // Aplica o acréscimo de 3% para pagamento a crédito
    }

    return valorTotal.toFixed(2); // Retorna o valor total formatado com 2 casas decimais
}
