"use strict";
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { currency: "BRL", style: "currency" });
}
function formatarData(data, formato = FormatoData.PADRAO) {
    let template;
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        template = data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        template = data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
        });
    }
    else {
        template = data.toLocaleDateString("pt-BR");
    }
    return template;
}
