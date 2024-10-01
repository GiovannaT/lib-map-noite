import './style.css'
import logo from '../../assets/logo-uepb.png';
export default function Cabecalho (){
  return(
    
    <div id="cabecalho">
      <div>
        <img className='logo' src={logo} alt="logo-uepb" />
      </div>

      <div className="pesquisar">
        <button className='botao-menu'><i className="ph ph-article"></i></button>
        <input className='barra-pesquisa' type="text" placeholder="Comece a procurar..."/>
        <button className='botao-pesquisar'><i className="ph ph-magnifying-glass"></i></button>
      </div>

      <div className="botoes">
      <button className="fale-conosco">Fale Conosco</button>
      <button className="minha-conta">Minha conta</button>
      <button className="notificacao"><i className="ph ph-bell-simple-ringing"></i></button>
      </div>
    </div>
      
  )
}