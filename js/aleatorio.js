const nomes = ["Sofia", "Bruno", "Maria Eduarda", "Maria Luiza", "Samira", "Silvia", "Jhonatan"];

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);

module.exports = {
    nomes,
    aleatorio,
    nome
};
