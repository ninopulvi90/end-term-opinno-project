import CloseIcon from './CloseIcon';
import GlobalIcon from './GlobalIcon';
import './post.css';

export default function Post(props) {
  console.log(props);
  return (
    <li className="mainPostContainer">
      <div className="headerPostContainer">
        <div>
          <div className="imgRoundedContainer big">
            <img src="https://picsum.photos/100/100" alt="user-image"></img>
          </div>
          <div className="userInfoContainer">
            <h2 style={{ fontWeight: 700 }}>{props.post.title}</h2>
            <div className="userStatusContainer">
              {/* <div className="imgRoundedContainer small">
                <img src="https://picsum.photos/100/100" alt="boh-image" />
              </div> */}
              <GlobalIcon />
              <p>x ore</p>
            </div>
          </div>
        </div>
        <CloseIcon />
      </div>

      <div className="bodyPostContainer">
        <p>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          velit odit. Quas, dolorum consequatur amet molestias sit numquam, quod
          dolores minus officiis soluta similique illum, suscipit assumenda quam
          sunt voluptatem. */}
          {props.post.body}
        </p>
        <div>
          <img src="https://picsum.photos/1000/800" alt="post-image"></img>
        </div>
      </div>
    </li>
  );
}
