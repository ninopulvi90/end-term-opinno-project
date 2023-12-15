import './Home.css';
import Footer from '../components/Footer';

export default function(){
    return (
        <main>
            <div className="menu_laterale">
                <div>Profile</div>
                <div>Sidebar</div>
                <Footer></Footer> 
            </div>
            <div className='centrale'>
                <nav>Navbar</nav>
                <div className="wrapper">                               {/* wrapper */}
                    <section>Add Post</section>
                    <section>Post</section>
                </div>
            </div>   
        </main>
    )
}