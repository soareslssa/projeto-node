import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import {Button} from 'react-bootstrap'
import './App.css';
import api from './services/api';

import BgImage from './assets/background.jpg';

function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, []);


  async function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`);
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

   const response = await api.post('/projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: "Lucas Soares"
      }
    );

    const project = response.data;
    
    // SETANDO UM VALOR SEGUINDO OS CONCEITOS DE IMUTABILIDADE
    setProjects([...projects, project]);

  }

  return(
    <>
      <center>
        <Header title="Projects"/>

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <Button onClick={handleAddProject}>Adicionar projeto</Button>
      </center>
    </>
  )
}

export default App;