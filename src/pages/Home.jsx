import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Mission from "../components/Mission";
import AddPost from "../components/AddPost";
import PostContainer from "../components/posts-container/PostContainer";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto">
        <div className="menu_laterale">
          <Sidebar />
        </div>
        <div className="centrale">
          <Header />
          <div className="wrapper p-8 pr-0 gap-4">
            {/* wrapper */}
            <section className="w-full">
              <AddPost />
            </section>
            <section>
              <Mission />
            </section>
            <section>
              <PostContainer />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
