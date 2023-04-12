import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import notFound from "../../assets/notFound.jpg";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../styles/BookDetails.css";

const URL = "https://openlibrary.org/works/";

function BookDetails() {
  const { key } = useParams();
  // console.log(key);
  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getBookDetails = async () => {
      try {
        const res = await fetch(`${URL}${key}.json`);
        const data = await res.json();
        console.log({ key });
        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const bookData = {
            description: description
              ? description.value
              : "No description found :(",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : notFound,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found :(",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found :(",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBookDetails(bookData);
        } else {
          setBookDetails(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBookDetails();
  }, [key]);

  if (loading) return <Loader />;

  return (
    <section className="book_details">
      <div className="container">
        <button
          type="button"
          className="flex flex_c return_back"
          onClick={() => navigate("/booklist")}
        >
          <BsFillArrowLeftSquareFill size={32} />
          <span className="fs_18 fw_6">Go Back</span>
        </button>
        <div className="book_details_content grid">
          <div className="book_details_img">
            <img src={bookDetails?.cover_img} alt="no cover" />
          </div>
          <div className="book_details_info">
            <div className="book_details_item title">
              <span className="fw_6 fs_24">{bookDetails?.title}</span>
            </div>
            <div className="book_details_item description">
              <span>{bookDetails?.description}</span>
            </div>
            <div className="book_details_item ">
              <span className="fw_6">Subject Places: </span>
              <span className="text_italic">{bookDetails?.subject_places}</span>
            </div>
            <div className="book_details_item ">
              <span className="fw_6">Subject Times: </span>
              <span className="text_italic">{bookDetails?.subject_times}</span>
            </div>
            <div className="book_details_item ">
              <span className="fw_6">Subjects </span>
              <span className="text_italic">{bookDetails?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
