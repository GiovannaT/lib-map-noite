import './style.css'

export default function Informacoes (){
  return(
    <div className='container'>

      <div className='titulo'>
        <p>Título</p>
        <input className='texto' type="text" />
      </div>

      <div className='autor'>
        <p>Autor</p>
        <input className='texto' type="text" />
        <p>Separe os autores com vírgula.
        Os sobrenomes com espaços devem ser colocados entre aspas. (ex. Clarice Lispector, Machado "De Assis")</p>
      </div>

      <div className='descricao'>
        <p>Descrição</p>
        <input className='comentario' type="text" />
      </div>

      <div className='temas'>
        <p>Temas</p>
        <input className='texto' type="text" />
      </div>

      <div className='numero-itens'>
        <p>Número de Itens</p>
        <input className='numero' type="text" placeholder="0"/>
      </div>

      <div className='rodape' >
        <div className='carregar-imagem'>
          <label htmlFor="file-upload" className="custom-file-upload">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l4-4m0 0l4 4m-4-4v12M21 21H3m6-6l6-6m0 0l6 6m-6-6v12" />
            </svg>
            Imagem da capa
          </label>
          <input id="file-upload" type="file" accept="image/*" />
        </div>
        <button className="botao-confirmar"> <i className="ph ph-check"></i>Confirmar</button>
      </div>

    </div>
  )
}