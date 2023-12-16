import './post.css';
import './comment.css';

export default function Comment(props) {
  return (
      
    <div className="comment-container">
      <div className="comment-header">
        <div className="imgRoundedContainer small">
          <img src="https://picsum.photos/100/100"></img>
        </div>
        <h2>{props.comment.name}</h2>
      </div>
      <p>{props.comment.body}</p>
    </div>
  );
}
