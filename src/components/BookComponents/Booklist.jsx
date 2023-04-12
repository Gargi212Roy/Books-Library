import React from "react";
import Book from "../BookComponents/Book";
import { useGlobalContext } from "../Context";
import Loader from "../Loader";
import notFound from "../../assets/notFound.jpg";

function Booklist() {
  const { showBooks, loading, showSearchedTitle } = useGlobalContext();
  const booksWithCovers = showBooks.map((Book) => {
    return {
      ...Book,
      key: Book.key.replace("/works/", ""),
      cover_img: Book.cover_id
        ? `https://covers.openlibrary.org/b/id/${Book.cover_id}-L.jpg`
        : notFound,
    };
  });
  // console.log(booksWithCovers);
  if (loading) return <Loader />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section_title">
          <h2>{showSearchedTitle}</h2>
        </div>
        <div className="booklist_content grid">
          {booksWithCovers.slice(0, 30).map((book, index) => {
            // console.log(book);
            return <Book key={index} book={book} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Booklist;
