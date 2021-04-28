import { FormEvent, useState } from "react";
import { API } from "../../../../infra/external/api";
import Button from "../../elements/buttons";
import Input from "../../elements/input";
import { FormContainer } from "./styled";

export default function LoginAdmin({  }: any) {

  const [Username, setUsername]: any = useState()
  const [Password, setPassword]: any = useState()

  const Login = async (evt: FormEvent) => {
    evt.preventDefault()
    try {
      const {data} = await API.post("/login", {
        username: Username,
        password: Password
      })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <FormContainer 
      margin="150px 50px" 
      width="50vh"
      onSubmit={ Login }
    >
       <Input 
          value={ Username }
          onChange={ setUsername }
          placeholder="Insira algo"
          type="text"
          label="Nome"
        />

        <Input 
          value={ Password }
          placeholder="Insira algo"
          onChange={ setPassword }
          type="text"
          label="Senha"
          ID="password"
        />

        <Button title="Autenticar" height="50px" />
    </FormContainer>
  )
}
