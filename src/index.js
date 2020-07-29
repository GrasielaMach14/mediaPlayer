import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index';

const Erro404 = () => (
        <div>
          <h2>Erro 404</h2> 
          <p>Página não encontrada</p>   
        </div> 
      )

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact ></Route>
      <Route path="/cadastro/video" component={CadastroVideo} ></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route>
      <Route component={Erro404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

/*
Este index irá renderizar a página do react, toda a aplicação estará dentro deste container
*/