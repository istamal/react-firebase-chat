import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../firebase";

const SendMessage = ({ scroll }) => {
    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();

        if (message.trim() === "") {
            alert("enter valid message");
            return;
        }

        const { uid, displayName, photoURL } = auth.currentUser;

        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <form onSubmit={(event) => sendMessage(event)}>
            <label htmlFor="messageInput" hidden>
                Enter message
            </label>
            <input 
                type="text"
                id="messageInput"
                name="messageInput"
                className="form_input__input"
                value={message}
                placeholder="type your message..."
                onChange={(event) => setMessage(event.target.value)}
            />
            <button className="submin_message" type="submit">Send</button>
        </form>
    )
}

export default SendMessage;
