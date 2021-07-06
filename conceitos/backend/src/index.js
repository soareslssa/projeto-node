const { request, response } = require('express');
const express = require('express');
const app = express();
const {uuid, isUuid} = require('uuidv4');
const cors = require('cors');

// deve vir no inicio da aplicação
app.use(cors());
app.use(express.json());

/**
 * Middleware:
 * 
 * Interceptador de requisicoes que pode interromper totalmente a requisicao ou alterar dados da requisicao.
 */

const projects = [];

// middleware
function logRequests(request, response, next){
  const {method, url} = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);

  // proximo middleware, se não for chamada a requisicao será totalmente interrompida.
  return next();
}

function validateProjectId(request, require, next){
  const {id} = request.params;

  if(!isUuid(id)){
    return response.status(400).json({error: 'Invalid project ID.'});
  }

  return next();
}


app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!',
    details: 'Meu primeiro programa'});
});

app.get('/projects', (request,response) => {
  const {title} = request.query;

  const results = title 
  ? projects.filter(project => project.title.includes(title))
  : projects;

  return response.json(results);
});

app.put('/projects/:id', (request,response) => {
  const {id} = request.params;
  const {title, owner} = request.body;

  const projectIndex = projects.findIndex(project => project.id == id);
 
  if(projectIndex < 0){
    return response.status(400).json({error: 'Project not found.'});
  }

  const project = {id,title,owner};

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request,response) => {
  const {id} = request.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  if(projectIndex < 0){
    return response.status(400).json({error: 'Project not found.'});
  }

  projects.slice(projectIndex, 1);

  // retorna em branco, apenas o status
  return response.status(204).send();
});

app.post('/projects', (request, response) => {
 const {title, owner} = request.body;

 const project = {id: uuid(),title, owner};

 projects.push(project);
  
  return response.json(project);
});

app.listen(3333, () => {
  console.log('🚀Back-end started!');
});