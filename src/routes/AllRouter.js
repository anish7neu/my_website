import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Skills from "../pages/skills/Skills";
import Works from "../pages/works/Works";

const AllRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/works" Component={Works}></Route>
        <Route path="/blogs" Component={Blogs}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AllRouter;
