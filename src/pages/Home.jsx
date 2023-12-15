import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar"

export default function Home () {
  return (
    <main>
      <div className="menu_laterale">
        <Sidebar />

      </div>
      <div className="centrale">
        <nav>Navbar</nav>
        <div className="wrapper">
          {" "}
          {/* wrapper */}
          <section>Add Post</section>
          <section>Post</section>
        </div>
      </div>
    </main>
  );
}
