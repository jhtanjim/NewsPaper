import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(bookName);
  return (
    <div>
      <div className="card border w-full shadow-xl">
        <figure className="bg-base-200 mx-8 mt-4">
          <img className=" my-12 w-48" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="flex gap-2">
            <section className=" text-xl font-semibold">Tags : </section>
            {tags.map((tag, idx) => (
              <span
                className="badge bg-green-100 text-green-600  py-4 font-semibold"
                key={idx}
              >
                {" "}
                #{tag}
              </span>
            ))}
          </p>{" "}
          <Link to={`/book/${bookId}`}>
            <h2 className="card-title text-2xl">{bookName}</h2>
          </Link>
          <p className="font-semibold opacity-80">By: {author}</p>
          <hr />
          <div className="lg:flex lg:justify-between">
            <h1 className="text-lg font-semibold opacity-80">{category}</h1>
            <section className="flex gap-1">
              {" "}
              <p className=" text-lg  font-semibold opacity-80">{rating}</p>
              <FaRegStar className="my-auto" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
