import React, {useState} from 'react';
import Header from './components/Header'
import {Button} from 'react-bootstrap'

function App(){

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web', 'Back-end nodeJs']);

 /**  useState retorna um array com 2 posições
   1. variavel com o seu valor inicial
   2. funcão para atualizar o valor
  */

  function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return(
    <>
      <center>
        <Header title="Projects"/>

        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <Button onClick={handleAddProject}>Adicionar projeto</Button>
      </center>
    </>
  )
}

export default App;