import React from 'react';
import BookCard from '../components/BookCard';

function Home({ books, addToCart }) {
  return (
    <div>
      <h1 className="mb-4 text-center">Welcome to Our Online Bookstore</h1>
      <div className="row">
        {books.map(book => (
          <BookCard key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;