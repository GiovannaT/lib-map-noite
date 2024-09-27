import './style.css'

import capa from '../../assets/Capa_Potter.png';

export default function Informacao_book() {
    return (
    <>
      <hr className="separador" />
      <div className="content">
        <div className="book-estrutura">
          <img
            className='book-capa' src={capa} alt='capa_Harry'
          />
          <div className="book-info">
            <h1>Harry Potter e a Criança Amaldiçoada</h1>
            <p className="autores">J.K. Rowling, John Tiffany, Jack Thorne</p>
            <p className="disponivel">
              <strong>Unidades disponíveis:</strong> 2
            </p>

            <div className="book-botoes">
              <button className="btn reserve-btn">✔ Reservar Livro</button>
              <button className="btn find-btn">➡ Encontrar Livro</button>
            </div>

            <p className="book-descricao">
            Lorem ipsum dolor sit amet consectetur. Amet vitae eleifend nibh condimentum tempor nulla eu. Commodo bibendum elit commodo nibh arcu est habitant. 
            Rhoncus nisi nibh platea bibendum nibh lacus proin ultrices. Aliquet lobortis morbi sodales facilisis faucibus nulla proin. Auctor mi ut commodo 
          pellentesque est pharetra posuere lacus id. Euismod vitae nisl adipiscing fermentum massa.
            </p>

            <p className="categorias">
              Temas Sociais / Amizade, Teatro / Dramaturgia, Fantasia & Magia,
              Teatro / Geral, Ação & Aventura / Geral, Europeu / Inglesa,
              Irlandesa, Escocesa, Galesa, Midia Tie-in, Artes Cênicas / Teatro
            </p>
          </div>
        </div>
      </div>
    </>
    );
}