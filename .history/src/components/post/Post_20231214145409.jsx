import './post.css';

export default function Post() {
  return (
    <div className="mainPostContainer">

      <div className="headerPostContainer">

        <div className="imgRoundedContainer big">
          <img src="https://picsum.photos/100/100" alt="user-image"></img>
        </div>
        <div className="userInfoContainer">
          <h2>Nome utente</h2>
          <div className="userStatusContainer">

            <div className="imgRoundedContainer small">
              <img src="https://picsum.photos/100/100" alt="boh-image" />
            </div>
            <p>x ore</p>
          
          </div>
        </div>
      </div>
      <div className="bodyPostContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          velit odit. Quas, dolorum consequatur amet molestias sit numquam, quod
          dolores minus officiis soluta similique illum, suscipit assumenda quam
          sunt voluptatem.
        </p>
        <div>
          <img src="https://picsum.photos/600/400" alt="post-image"></img>
        </div>
      </div>
    </div>
  );
}
