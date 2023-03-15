const express = require('express');
const server = express();

server.use(express.json());

const transferencias = {
    nome: "Igor Matheus",
    empresa: "Colégio Ser!",
    cpf_cnpj: "456.456.456-66",
    valor: 450.00,
    dia_data: "2023-03-15",
    destinatario: "Instituto Vida"
};

// Retorna uma transferência
server.get('/transferencias/:index', (req, res) => {
    const { index } = req.params;
    return res.json(transferencias[index]);
});

// Retorna todas as transferências
server.get('/transferencias', (req, res) => {
    return res.json(transferencias);
});

// Insere uma nova transferência
server.post('/transferencias', (req, res) => {
    const { name } = req.body;
    transferencias.push(name);
    return res.json(transferencias);
});

// Atualiza uma transferência
server.put('/transferencias/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    transferencias[index] = name;
    return res.json(transferencias);
});

// Apaga uma transferência
server.delete('/transferencias/:index', (req, res) => {
    const { index } = req.params;
    transferencias.splice(index, 1);
    return res.json({ message: 'A transferência foi apagada com sucesso.' });
});

server.listen(3000);