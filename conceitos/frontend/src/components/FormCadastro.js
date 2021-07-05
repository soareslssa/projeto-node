import React from 'react';
import { FormGroup, Button } from 'react-bootstrap';

export default function FormCadastro(){
  return(
    <FormGroup>
      <label for='txtNome'>Nome </label>
      <input id='txtNome' type='text' />
      <br />

      <label for='txtSobrenome'>Senha </label>
      <input id='txtSobrenome' type='password' />

      <br />
      <Button color="sucess">Entrar</Button>
    </FormGroup>
  )
}
