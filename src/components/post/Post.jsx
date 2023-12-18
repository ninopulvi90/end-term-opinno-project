/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CloseIcon from "../close-btn/CloseIcon";
import GlobalIcon from "../GlobalIcon";
import CommentBtn from "../comment-btn/CommentBtn";
import LikeBtn from "../like-btn/LikeBtn";

import Comment from "../comment/Comment";

import "./post.css";
import "../close-btn/close-icon.css";

import { getUserById, getPostComments } from "../../network/Gateway";
import PostCta from "../post-cta/PostCta";

export default function Post(props) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); //gestione per apertura commenti
  const [isPostOpened, setIsPostOpened] = useState(true); //gestione closeBtn

  useEffect(() => {
    const getUser = async () => {
      const resp1 = await getUserById(props.post.userId);

      setUser(resp1.data);
    };

    console.log(props.post.userId);

    getUser();
  }, [props.post.userId]);

  useEffect(() => {
    if (selectedPost) {
      getPostComments(selectedPost).then((resp) => setComments(resp.data));
    }
  }, [selectedPost]);

  const showComments = function (index) {
    setSelectedPost(index);
  };

  const closeComments = () => {
    setSelectedPost(null);
  };

  const closePost = () => {
    setIsPostOpened(false);
  };

  return (
    <>
      {isPostOpened && (
        <li className="mainPostContainer dark:bg-smp-light-gray dark:text-white text-smp-dark-gray bg-smp-white rounded-2xl">
          <div className="headerPostContainer ">
            <div>
              <div className="imgRoundedContainer bigMichele">
                <img
                  src={`https://picsum.photos/id/${user.id + 60}/800/600`}
                  alt="user-image"
                ></img>
              </div>
              <div className="userInfoContainer">
                <h2 style={{ fontWeight: 700 }}>{user.name}</h2>
                <div className="userStatusContainer">
                  <GlobalIcon />
                  <p>x ore</p>
                </div>
              </div>
            </div>

            <div id="closeButton" onClickCapture={closePost}>
              <CloseIcon />
            </div>
          </div>

          <div className="bodyPostContainer ">
            <p>{props.post.body}</p>

            <div onClickCapture={closeComments}>
              <img
                src={`https://picsum.photos/id/${props.post.id + 30}/800/600`}
                alt="post-image"
              ></img>
            </div>
          </div>
          <div className="commentsBar">
            <PostCta
              innerText="Mi piace"
              iconType="like"
            />
            <PostCta
              innerText="Commenti"
              iconType="comments"
              onClick={() => showComments(props.post.id)}
            />
          </div>

          <ul className="comments">
            <div className="className-container" onClick={closeComments}>
              <p>Mostra meno</p>
            </div>
            {selectedPost === props.post.id &&
              comments.map((comment, index) => (
                <li key={index}>
                  <Comment comment={comment} />
                </li>
              ))}
          </ul>
        </li>
      )}
    </>
  );
}
