import express from 'express';
import routes from './routers';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar um informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados apra criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deleter
// Query Params: Paginação, listas, consultas

app.use(routes);


app.listen(3333);