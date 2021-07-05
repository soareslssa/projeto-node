import React from 'react';
import { FormGroup, Button } from 'react-bootstrap';

export default function FormCadastro(props){
  return(
    <FormGroup>
     
      <label for='txtNome'>Nome </label>
      <input id='txtNome' type='text' />
      <br />

      <label for='txtSobrenome'>Senha </label>
      <input id='txtSobrenome' type='text' />

      <br />
      <Button color="primary">Entrar</Button>
      <Button>Cadastrar</Button>
    </FormGroup>
  )
}
