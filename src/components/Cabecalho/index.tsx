import './style.css'
import logo from '../../assets/logo_UEPB.png';
import { Article, MagnifyingGlass, BellSimpleRinging } from 'phosphor-react';

export default function Cabecalho (){
  return( 
    <div id="cabecalho">
      <div>
        <img className='logo' src={logo} alt="logo-uepb" />
      </div>

      <div className="pesquisar">
        <button className='botao-menu'><Article size={24}/></button>
        <input className='barra-pesquisa' type="text" placeholder="Comece a procurar..."/>
        <button className='botao-pesquisar'><MagnifyingGlass size= {24} /></button>
      </div>

      <div className="botoes">
      <button className="fale-conosco">Fale Conosco</button>
      <button className="minha-conta">Minha conta</button>
      <button className="notificacao"><BellSimpleRinging size={24}/></button>
      </div>
    </div>

    )
}