import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../pages/Main";
import Main2 from "../../pages/Main2";
import Main3 from "../../pages/Main3";
import Test from "../../pages/Test";
import StyledComponents from "../../pages/StyledComponents";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/main2" element={<Main2/>} />
      <Route path="/main3" element={<Main3/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/styledcomponents" element={<StyledComponents/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;