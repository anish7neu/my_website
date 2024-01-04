import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Skills from "../pages/skills/Skills";
import Works from "../pages/works/Works";
import MainBlogPage from "../pages/blogs/MainBlogPage";
import { useState } from "react";
import CreatePost from "../pages/blogs/CreatePost";
import PostsList from "../pages/blogs/PostsList";

const AllRouter = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/works" Component={Works}></Route>
        <Route path="/blogs" Component={Blogs}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route
          path="/createPost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route
          path="/mainBlogPage"
          element={<MainBlogPage isAuth={isAuth} setIsAuth={setIsAuth} />}
        ></Route>
        <Route
          path="/postsList"
          element={<PostsList isAuth={isAuth} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AllRouter;
