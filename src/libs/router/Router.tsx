import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../pages/Main";
import Main2 from "../../pages/Main2";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/main2" element={<Main2/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;