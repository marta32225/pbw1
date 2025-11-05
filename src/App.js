import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import FormIP from "./component/FormIP";
import FormEP from "./component/FormEP";
import DataProduk from "./component/DataProduk";
import DataAwrjs from './component/DataAWRJS';
import FormIaw from './component/FormIAW';
import FormEaw from './component/FormEAW';

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DataProduk" element={<DataProduk />} />
          <Route path="/DataAwrjs" element={<DataAwrjs />} />
          <Route path="/FormIP" element={<FormIP />} />
          <Route path="/FormIaw" element={<FormIaw />} />
          <Route path="/FormEP/:id" element={<FormEP />} />
          <Route path="/FormEaw/:id" element={<FormEaw />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
