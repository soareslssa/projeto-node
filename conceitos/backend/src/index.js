const { request, response } = require('express');
const express = require('express');
const app = express();
const {uuid} = require('uuidv4');

// deve vir no inicio da aplicação
app.use(express.json());

const projects = [];

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