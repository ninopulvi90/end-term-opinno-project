import { useEffect, useState } from 'react';
import CloseIcon from './CloseIcon';
import GlobalIcon from './GlobalIcon';
import CommentIcon from './CommentIcon';
import LikeIcon from './LikeIcon';

import Comment from './Comment';

import './post.css';
import './close-icon.css';

import { getPostComments } from '../../network/Gateway';

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostOpened, setIsPostOpened] = useState(true);

  useEffect(() => {
    if (selectedPost) {
      getPostComments(selectedPost)
        .then((data) => setComments(data))
        .catch((error) => {
          throw new Error(error);
        });
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
        <li className="mainPostContainer">
          <div className="headerPostContainer">
            <div>
              <div className="imgRoundedContainer big">
                <img src="https://picsum.photos/100/100" alt="user-image"></img>
              </div>
              <div className="userInfoContainer">
                <h2 style={{ fontWeight: 700 }}>{props.post.title}</h2>
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

          <div className="bodyPostContainer">
            <p>{props.post.body}</p>

            <div onClickCapture={closeComments}>
              <img
                src={`https://picsum.photos/id/${props.post.id}/800/600`}
                alt="post-image"
              ></img>
            </div>
          </div>
          <div className="commentsBar">
            <div>
              <LikeIcon />
            </div>
            <div onClick={() => showComments(props.post.id)}>
              <CommentIcon />
            </div>
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
