import React from 'react';
import './Login.css';

function Login(){
  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="form-group">
            <label htmlFor="matricula">Matrícula</label>
            <input type="text" id="matricula" placeholder="Informe sua matrícula" maxLength={9} />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Informe sua senha" maxLength={20}/>
          </div>

          <div className="form-group remember-me">
            <input type="checkbox" id="lembrar" />
            <label htmlFor="lembrar">Lembrar de mim</label>
          </div>

          <button type="submit" className="login-button">Acessar</button>
        </form>

        <div className="library-info">
          <p>
            Universidade Estadual da Paraíba <br />
            Biblioteca Setorial Professor Virgílio Trindade <br />
            Catálogo Online
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
