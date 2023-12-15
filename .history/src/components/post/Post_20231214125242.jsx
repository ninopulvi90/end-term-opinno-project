import './post.css';

export default function Post() {
  return (
    <div className="mainPostContainer">
      <div className="headerPostContainer">
        <div className="imgContainer">
          <img src="https://picsum.photos/30/30" alt=""></img>
        </div>
        <div className="userInfoContainer">
          <h2>Nome utente</h2>
          <div className="userStatutContainer">
            <img src="https://picsum.photos/10/10" alt="" />
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
        <img src="https://picsum.photos/200/300" alt=""></img>
      </div>
    </div>
  );
}
