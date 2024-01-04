import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./MainBlogPage.css";
import PostsList from "./PostsList";

const MainBlogPage = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/mainBlogPage");
    });
  };
  const signOutWithGoogle = () => {
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/mainBlogPage");
    });
  };

  return (
    <div className="main-page-container">
      <div>
        <Link className="home-page-link" to="/">
          Go To Home page
        </Link>
      </div>
      {isAuth ? (
        <>
          <button className="sign-out-btn" onClick={signOutWithGoogle}>
            Sign Out
          </button>
          <div>
            <button className="create-post-btn">
              <Link className="create-post-link" to="/createPost">
                Create Post
              </Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <button className="sign-in-btn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </>
      )}
      <div>
        <PostsList />
      </div>
    </div>
  );
};

export default MainBlogPage;
