import { useState } from "react";

export default function Greeting({ messages }) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    //const [greeting, setGreeting] = useState(messages[0]);
    const [greeting, setGreeting] = useState(randomMessage);

    /*
    Button triggered greeting randomization
    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div >
    )
     */
    //Greeting randomization by default
    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
        </div>
    )
}