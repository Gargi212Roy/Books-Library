import React from "react";
import { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "../../styles/BookSearch.css";
function BookSearch() {
  const { setSearchData, setShowSearchedTitle } = useGlobalContext();

  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchText = searchText.current.value.trim();
    if (tempSearchText.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchData("Percy Jackson");
      setShowSearchedTitle("Please Enter Something ...");
    } else {
      setSearchData(searchText.current.value);
    }

    navigate("/booklist");
  };
  return (
    <>
      <div className="search_form">
        <div className="container">
          <div className="search_form_content">
            <form className="search_form" onSubmit={handleSubmit}>
              <div className="search_form_input flex flex_sb bg_white">
                <input
                  type="text"
                  className="input_text"
                  placeholder="Perhaps... Percy Jackson?"
                  ref={searchText}
                />
                <button className="flex flex_c" onClick={handleSubmit}>
                  <FaSearch className="text_purple" size={32} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSearch;
