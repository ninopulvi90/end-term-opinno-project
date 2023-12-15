import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar"
import Header from "../components/header/Header";
import Mission from "../components/Mission";
import AddPost from "../components/AddPost";
import PostContainer from "../components/posts-container/PostContainer";

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
          <section className="w-full"><AddPost /></section>
          <section>
            <Mission />
          </section>
          <section><PostContainer /></section>
        </div>
      </div>
    </main>
  );
}
