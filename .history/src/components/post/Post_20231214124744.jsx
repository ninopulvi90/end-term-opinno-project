import './post.css';

export default function Post() {
  return (
    <div className="mainPostContainer">
      <div className="headerPostContainer">
        <div className="imgContainer">
          <img src="" alt=""></img>
        </div>
        <div className="userInfoContainer">
          <h2>Nome utente</h2>
          <div className="userStatutContainer">
            <img src="" alt="" />
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
        <img src="" alt=""></img>
      </div>
    </div>
  );
}
