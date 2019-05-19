import React, { Component } from 'react';
import { Form,Input} from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import iconUser from '../../assets/default-user.jpeg';
import { ContainerRegister,DivForm } from './styles.js';
import * as Yup from 'yup';


// bando de dados connect
import firebase from '../../Firebase.js';


class register extends Component {
  
  constructor(){
    super();
    
    this.state = {
      alert: false,
      user:[]
    }
  }
  
 

 
 handleSubmit =  (data, { resetForm})  => {
  const email = data.email;
  const senha = data.senha;
  const name  = data.name;
  firebase.auth()
	.createUserWithEmailAndPassword(email, senha)
	.then(() => {
	    const user = firebase.auth().currentUser;
	    user
	    .updateProfile({displayName: name})
		.then(() => {
      resetForm();
      this.setState({
        alert : true
      });
     
      setTimeout(() => { this.props.history.push("/login")}, 3000)
		})
		.catch(error => {
		    this.setState({error});
		});
        })
    .catch(error => {
        this.setState({error});
    });
};

  render() {


    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().min(4).required(),
       
    });


    const RegisterTrue = (
      <div className="alert">
          <p>Cadastro Realizado com sucesso !</p>
      </div>
    );
    return(
      
        <ContainerRegister>
          { this.state.alert=== true && RegisterTrue}
          <Link to="/">
              <header>
                <h1>React Note</h1>
                <img src={logo} alt="logo" />
              </header>
            </Link>
         
            
              <DivForm>
                <h2>Acessar conta</h2>
                <Form schema={schema} className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <img src={iconUser} alt="Icone user" />
                    </div>
                    
                    <Input type="text" name="name" placeholder="Nome" />
                    <Input type="email" name="email" placeholder="Email" />
                    <Input type="password" name="senha" placeholder="Senha" />
                    <Input type="submit" name="login" value="CADASTRAR"/>
                </Form>
              </DivForm>
            
         
        </ContainerRegister>
    );
  }
}
export default register;