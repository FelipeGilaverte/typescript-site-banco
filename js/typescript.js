"use strict";
let valor = 42;
let nome = "Bytebank";
let ativo = true;
let qualquer = "Pode ser qualquer coisa";
qualquer = 123;
//arrays 
const lista = [1, 2, 3, 4, 5];
lista.push(6, "cachorro", true);
const numeros = [1, 2, 3, 4, 5];
//tuplas
const pessoa = ["João", 30];
const transacao = ["Depósito", 1000, new Date()];
//enums
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["Deposito"] = "Dep\u00F3sito";
    TipoTransacao["Transferencia"] = "Transfer\u00EAncia";
    TipoTransacao["PagamentoBoleto"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
let transacao1 = {
    tipoTransacao: TipoTransacao.Deposito,
    valor: 1000,
    data: new Date()
};
