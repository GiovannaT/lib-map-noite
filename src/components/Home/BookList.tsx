// components/BookList.tsx
import React from 'react';
import './BookList.css'

interface Book {
  title: string;
  author: string;
  coverImage: string;
}

const BookList: React.FC = () => {
  const books: Book[] = [
    {
      title: 'Harry Potter and the Cursed Child',
      author: 'J.K. Rowling',
      coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUmnGcEDTYn0PSXd0j46wosshjs4SQlWJag&s', 
    },
  ];

  return (
    <div className="book-list-container">
      <div className="alphabet-list">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
          (letter) => (
            <button key={letter} type="button">
              {letter}
            </button>
          )
        )}
      </div>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.title} className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;