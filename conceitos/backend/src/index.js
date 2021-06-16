const { request, response } = require('express');
const express = require('express');
const app = express();

// deve vir no inicio da aplicação
app.use(express.json());

/** Rota que retorna informações para o usuário. */
/**
 * Tipo de parametros:
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (atualizar/deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso(JSON)
 */
app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!',
    details: 'Meu primeiro programa'});
});

app.get('/projects', (request,response) => {
  // setta tudo o que é passado como parametro query na url
  const {title, autor} = request.query; 
  console.log(title);
  console.log(autor);

  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.put('/projects/:id', (request,response) => {
  // setta os route params 
  const {id} = request.params;
  console.log(id);
 
  return response.json([
    'Projeto 3',
    'Projeto 2'
  ]);
});

app.delete('/projects/:id', (request,response) => {
  return response.json([
    'Projeto 2'
  ]);
});

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);  
  
  return response.json([
      'Projeto 1',
      'Projeto 2',
      'Projeto 3'
    ])
});

app.listen(3333, () => {
  console.log('🚀Back-end started!');
});