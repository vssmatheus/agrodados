import React, {useCallback } from 'react';
import { withRouter, Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      margin: 0,
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));


export const RecuperarSenha = withRouter(({history}) => {
    const classes = useStyles();
    
    const recuperarFunc = useCallback(
        async (event) =>{
            event.preventDefault();

            const { email } = event.target.elements; 

            try{
                await firebase
                .auth()
                .sendPasswordResetEmail(email.value);
                window.alert("Verifique seu email para Recuperar sua senha!")
                history.push('/logar');
                
            } catch (error) {
                console.log(error);
                alert("Email não cadastrado!");
            }
           
        },
        [history],
    );

    return (
        <div className={classes.root}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" >
                    <div className="card-login">
                        <div className="card-login-container">
                            <h1>Esqueceu sua senha?</h1>
                            <p>Insira o seu email cadastrado para recuperar sua conta,<br/>em breve enviaremos um link para recuperação!</p>
                            <form onSubmit={recuperarFunc}>
                                <div>
                                    <input className="input-email" type="email" placeholder="Seu e-mail" name="email" required/>
                                </div>
                                <div>
                                    <button className="matt-btn-blue" type="submit" >Enviar</button>
                                </div>
                            </form>
                            <div className="back-to-login">
                                <Link className="back-link" to="/logar">
                                    <FiArrowLeft size={25} color="#555" />
                                    <span className="back-text">Voltar ao login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>          
            </React.Fragment>
        </div>
    );
});