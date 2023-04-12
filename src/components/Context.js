import {
  useEffect,
  useState,
  useContext,
  useCallback,
  createContext,
} from "react";

const url = "https://openlibrary.org/search.json?title=";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [showBooks, setShowBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSearchedTitle, setShowSearchedTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchData}`);
      const data = await res.json();
      const { docs } = data;
      // console.log(docs);

      // console.log("setShowSearchedTitle", setShowSearchedTitle());
      if (docs) {
        const newBooks = docs.slice(0, 30).map((book) => {
          const {
            key,
            cover_i,
            author_name,
            edition_count,
            title,
            first_publish_year,
          } = book;
          // console.log("Key:", key);
          return {
            key: key,
            cover_id: cover_i,
            author_name: author_name,
            edition_count: edition_count,
            title: title,
            first_publish_year: first_publish_year,
          };
        });

        setShowBooks(newBooks);

        if (newBooks.length > 1) {
          setShowSearchedTitle("Searched Results: ");
        } else {
          setShowSearchedTitle("No Results Found :(");
        }
      } else {
        setShowBooks([]);
        setShowSearchedTitle("No Results Found :(");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchData]);

  useEffect(() => {
    fetchBooks();
  }, [searchData, fetchBooks]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        showBooks,
        setSearchData,
        showSearchedTitle,
        setShowSearchedTitle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
