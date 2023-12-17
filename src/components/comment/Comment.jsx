import '../post/post.css';
import './comment.css';

export default function Comment(props) {
  return (
      
    <div className="comment-container dark:bg-smp-light-gray dark:text-white text-smp-dark-gray bg-smp-white">
      <div className="comment-header">
        <div className="imgRoundedContainer smallMichele">
          <img src={`https://picsum.photos/id/${props.comment.id + 90}/100/100`}></img>
        </div>
        <h2>{props.comment.name}</h2>
      </div>
      <p>{props.comment.body}</p>
    </div>
  );
}
