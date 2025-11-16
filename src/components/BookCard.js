import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, addToCart }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.author}</p>
          <p className="text-muted">${book.price}</p>
        
          <button onClick={() => addToCart(book)} className="btn btn-warning btn-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;