import './post.css';

export default function Post() {
  return (
    <div className="mainPostContainer">
      <div className="headerPostContainer">
        <div className='imgContainer'>
          <img src=""></img>
        </div>
        <h2>Titolo</h2>
      </div>
      <div className="bodyPostContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          velit odit. Quas, dolorum consequatur amet molestias sit numquam, quod
          dolores minus officiis soluta similique illum, suscipit assumenda quam
          sunt voluptatem.
        </p>
      </div>
    </div>
  );
}
