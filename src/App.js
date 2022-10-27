import "./App.css";
import Home from "./Components/Home/Home";
import Kurumsal from "./Components/Kurumsal/Kurumsal";
import Urunler from "./Components/Ürünler/Urunler";
import Urunler2 from "./Components/Ürünler/Urunler2";
import Urunler3 from "./Components/Ürünler/Urunler3";
import Urunler4 from "./Components/Ürünler/Urunler4";
import Contact from "./Components/Contact/Contact";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { HashRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/urunlersayfa2" element={<Urunler2 />} />
          <Route path="/urunlersayfa3" element={<Urunler3 />} />
          <Route path="/urunlersayfa4" element={<Urunler4 />} />
        </Routes>
        <ScrollToTop />
      </HashRouter>
      <ScrollButton />
    </>
  );
}

export default App;
