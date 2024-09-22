import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
