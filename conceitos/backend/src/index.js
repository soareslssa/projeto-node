const { request, response } = require('express');
const express = require('express');
const app = express();

/** Rota que retorna informações para o usuário. */
app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!',
    details: 'Meu primeiro programa'});
});

app.get('/projects', (request,response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.put('/projects/:id', (request,response) => {
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
    return response.json([
      'Projeto 1',
      'Projeto 2'
    ])
});

app.listen(3333, () => {
  console.log('🚀Back-end started!');
});