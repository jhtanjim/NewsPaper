import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold">Books</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
