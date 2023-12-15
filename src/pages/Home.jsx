import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar"
import Header from "../components/header/Header";
import Mission from "../components/Mission";
import AddPost from "../components/AddPost"

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
          <section>Post</section>
          <section>
            <Mission />
          </section>
        </div>
      </div>
    </main>
  );
}
