import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
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
  return (
    <div className="my-20">
      <div className="lg:flex gap-8 ">
        <figure className="px-32 w-[40%] bg-base-200 h-[711px] py-24">
          <img src={image} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className=" w-[60%] my-16">
          <h2 className="card-title text-[40px]">{bookName}</h2>

          <p className="font-semibold text-[20px] opacity-80 my-4">
            By: {author}
          </p>
          <hr />
          <h1 className="text-[20px] font-semibold opacity-80 my-4">
            {category}
          </h1>
          <hr />
          <div className="my-4">
            <p className="flex text-[16px]">
              <section className="font-bold">Review: </section>
              {review}
            </p>
            <p className="flex gap-2 my-4">
              <section className=" text-[16px] font-semibold">Tags : </section>
              {tags.map((tag, idx) => (
                <span
                  className="badge bg-green-100 text-green-600 px-4 py-4 font-semibold"
                  key={idx}
                >
                  {" "}
                  #{tag}
                </span>
              ))}
            </p>
          </div>
          <hr className="my-4" />

          <div className="grid grid-cols-2 ">
            <div className="">
              <p className="font-semibold opacity-80 my-2">
                Number of pages :{" "}
              </p>

              <p className="font-semibold opacity-80 my-2">Publisher : </p>
              <p className="font-semibold opacity-80 my-2">
                Year of publishing :{" "}
              </p>

              <p className="font-semibold opacity-80 my-2">Rating: </p>
            </div>
            <div className="font-semibold opacity-80">
              <p className="my-2">{totalPages}</p>
              <p className="my-2">{publisher}</p>
              <p className="my-2"> {yearOfPublishing}</p>
              <p className="flex gap-1">
                {rating} <FaRegStar className="my-auto" />{" "}
              </p>
            </div>
          </div>
          <div className="lg:flex gap-4 my-4">
            <button className="btn btn-outline btn-primary px-8">Read</button>
            <button className="btn px-8 btn-primary">Wishlist </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
