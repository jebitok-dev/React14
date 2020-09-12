import React, { useState } from 'react';
import './form.styles.scss';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {name, email, message} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/Jebitok/google_sheets/YVoKJnFiwlVIsOVA",
                {
                    method: "post",
                    body: JSON.stringify([[name, email, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
        <div className="App">
            <form
                className="input-form"
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
            >
                <input
                    name="name" 
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleInput}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleInput}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleInput}
                />
                <input name="submit" type="submit" value="Send" />
                {message}
            </form>
        </div>
    );
}