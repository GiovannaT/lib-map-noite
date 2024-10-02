import React from 'react';
import './Filters.css'

const BookList: React.FC = () => {

  return (
        <div className="filters">
            <div className='biblioteca'>
                <h2>Biblioteca</h2>
            </div>
            <div className='botoes-filtros'>
                <button type="button">Preencher</button>
                <button type="button">Título</button>
                <button type="button">
                 <span role="img" aria-label="Ordenar">
                  ⬇️
                </span>
                </button>
                <button type="button">Filtros</button>
                <button type="button">1</button>
                <button type="button">
                <span role="img" aria-label="Próxima página">
                &gt;
                 </span>
                </button>
        </div>
      </div>
  );
};

export default BookList;