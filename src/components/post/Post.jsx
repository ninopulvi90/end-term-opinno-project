import { useEffect, useState } from 'react';
import CloseIcon from './CloseIcon';
import GlobalIcon from './GlobalIcon';
import CommentIcon from './CommentIcon';
import LikeIcon from './LikeIcon';
import './post.css';
import './close-icon.css';

import gateway from '../../network/Gateway';

export default function Post(props) {
  const [comments, setComments] = useState([]);
  // const [isCommentLoaded, setIsCommentLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostOpened, setIsPostOpened] = useState(true);

  useEffect(() => {
 
    gateway.getPostComments(setComments, props.post.id);
    console.log(comments);
  },[]);
  // }, [isCommentLoaded]);

  const showDetail = function (index) {
    setSelectedPost(index);
  };

  const closeDetail = () => {
    setSelectedPost(null);
  };

  const closePost = () => {
    setIsPostOpened(false);
  };

  // const loadComments = () => {
  //   setIsCommentLoaded(true);
  // };

  return (
    <>
      {isPostOpened && (
        <li
          onClick={() => showDetail(props.post.id)}
          className="mainPostContainer"
        >
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

            {selectedPost === props.post.id && (
              <div onClickCapture={closeDetail}>
                <img
                  src={`https://picsum.photos/id/${props.post.id}/800/600`}
                  alt="post-image"
                ></img>
              </div>
            )}
          </div>
          <div className="commentsBar">
            <LikeIcon />
            {/* <div onClickCapture={loadComments}> */}
              <CommentIcon />
            {/* </div> */}
          </div>

          <ul className="comments">
            {/* {isCommentLoaded &&
              comments.map((comment, index) => (
                <li key={index}>
                  <p>{comment}</p>
                </li>
              ))} */}
          </ul>
        </li>
      )}
    </>
  );
}
