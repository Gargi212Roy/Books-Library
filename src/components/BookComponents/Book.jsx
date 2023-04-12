import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Booklist.css";
function Book({ book }) {
  console.log(book);
  return (
    <div className="book_item flex flex_column flex_sb">
      <div className="book_item_img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book_item_info text_center">
        <Link to={`/booklist/book/${book.key}`}>
          <div className="book_info_content title fw_7 fs_18">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="book_info_content author fs_15">
          <span className="text_capitalize fw_7">Author: </span>
          <span>{book.author_name}</span>
        </div>
        <div className="book_info_content edition_count fs_15">
          <span className="text_capitalize fw_7">Total Editions</span>
          <span>{book.edition_count}</span>
        </div>
        <div className="book_info_content publich_yearfs_15">
          <span className="text_capitalize fw_7">First Publication: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
