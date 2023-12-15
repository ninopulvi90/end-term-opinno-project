import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar"
import Header from "../components/header/Header";

export default function Home () {
  return (
    <main>
      <div className="menu_laterale">
        <Sidebar />

      </div>
      <div className="centrale">
        <Header />
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
