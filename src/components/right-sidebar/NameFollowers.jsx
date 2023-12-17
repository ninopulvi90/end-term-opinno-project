import Axios from "axios";
import { useState, useEffect } from "react";
import Followers from "./Followers";

export default function NameFollowers(props){
    const [followers, setFollowers] = useState([]); /*10 utenti*/

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>{
        setFollowers(response.data);
        console.log(response.data);
        } )
    }, []);

    return (
    <div>
        {followers.map((follower, index) => (
            <div key={index}>
              <h2>{follower.name}</h2>
            </div>
        ))}
    </div>
)}


// posts.slice(0, 9).map((post, index) => {
//     post.author = postAuthors[index];

//     return <Post post={post} />;
//   })