import Axios from "axios";
import { useState, useEffect } from "react";

export default function NameFollowers(props){
    const [followers, setFollowers] = useState([]); /*10 utenti*/

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>{
        setFollowers(response.data);
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

