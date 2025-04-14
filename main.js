const pratos = [
    { 
        nome: 'Feijoada', 
        imagem: 'https://www.receiteria.com.br/wp-content/uploads/feijoada-730x548.jpg', 
        descricao: 'Prato típico brasileiro feito com feijão preto e carnes.' 
    },
    { 
        nome: 'Acarajé', 
        imagem: 'https://www.receiteria.com.br/wp-content/uploads/acaraje-730x548.jpg', 
        descricao: 'Delícia da Bahia feito com feijão-fradinho e camarão.' 
    },
    { 
        nome: 'Pamonha', 
        imagem: 'https://www.receiteria.com.br/wp-content/uploads/pamonha-730x548.jpg', 
        descricao: 'Prato típico do interior feito com milho verde.' 
    }
];

const pratosDiv = document.getElementById('pratos');
const detalhesDiv = document.getElementById('detalhes');

pratos.forEach(prato => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = <img src="${prato.imagem}"><h3>${prato.nome}</h3>;
    card.onclick = () => mostrarDetalhes(prato);
    pratosDiv.appendChild(card);
})

function mostrarDetalhes(prato) {
    detalhesDiv.innerHTML = <h2>${prato.nome}</h2><img src="${prato.imagem}" width="300"><p>${prato.descricao}</p>;
}