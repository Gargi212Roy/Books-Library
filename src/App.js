import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./components/Context";
import Home from "./pages/Home";
import About from "./pages/About";
import Booklist from "./components/BookComponents/Booklist";
import BookDetails from "./components/BookComponents/BookDetails";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/about" element={<About />} />
              <Route path="/booklist" element={<Booklist />} />
              <Route path="/booklist/book/:key" element={<BookDetails />} />
            </Route>
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
