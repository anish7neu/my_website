import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import "./PostsList.css";
const PostsList = ({ isAuth }) => {
  const [postslist, setPostsLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <div className="posts-list-container">
        {postslist.map((post) => {
          return (
            <div className="single-post">
              <div className="post-title">{post.title}</div>

              <div className="post-content">{post.postText}</div>
              <div className="post-footer">
                {localStorage.getItem("isAuth") &&
                post.author.id === auth.currentUser.uid ? (
                  <div className="delete-post">
                    <button
                      className="delete-btn"
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                <div className="author-name">Author: @{post.author.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostsList;
