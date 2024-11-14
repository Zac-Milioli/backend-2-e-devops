// const { addUser, getUserById } = require('./user');
// const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('./auction');

// // Exemplo de uso
// addUser({ id: 1, name: 'Alice' });
// addUser({ id: 2, name: 'Bob' });

// createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });

// placeBid(1, 2, 120); // Bob (id: 2) dá um lance de 120 no leilão (id: 1)

// const user = getUserById(2);
// const auction = getAuctionById(1);
// const bids = getBidsForAuction(1);

// console.log('Usuário:', user);
// console.log('Leilão:', auction);
// console.log('Lances:', bids);

const express = require('express');

const app = express();
const port = 3000;

// Rota GET para "/"
app.get('/', (req, res) => {
    res.send('Aplicação EC2 Funcionando oficial');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});