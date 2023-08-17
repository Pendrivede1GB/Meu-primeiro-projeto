
const readline = require('readline');
const { calcularValorDaCompra } = require('./caixa-da-lanchonete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe os itens (código) separados por espaço: ', (itens) => {
    rl.question('Informe a forma de pagamento: ', (formaDePagamento) => {
        const itensArray = itens.split(' ').map(item => ({ codigo: item }));
        const valorTotal = calcularValorDaCompra(itensArray, formaDePagamento);
        console.log(`Valor total: R$ ${valorTotal}`);
        rl.close();
    });
});
