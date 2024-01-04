import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

export default function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPosttext] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/mainBlogPage");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/mainBlogPage");
    }
  });

  return (
    <>
      <h1>Create A Post</h1>
      <div className="container">
        <div>
          <label>Title</label>
          <br />
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Content</label>
          <br />
          <textarea
            placeholder="Write Content Of Blog..."
            onChange={(event) => {
              setPosttext(event.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </>
  );
}
