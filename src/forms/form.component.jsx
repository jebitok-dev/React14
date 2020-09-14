import React, { useState } from 'react';
import { Form, Text } from 'informed';
import './form.styles.scss';


const SPREADSHEET_ID = '1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0';
const CLIENT_ID = '107836451793691635552';
const API_KEY = 'b0b8b52ccd939d3ea6ab70f4d2443293569d2b0b';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };
 
    // const creds = require('./config/myapp-1dd646d7c2af.json'); // the file saved above
    // const doc = new GoogleSpreadsheet('/d/1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0');
    // await doc.useServiceAccountAuth(creds);

    // const sendData = async e => {
    //     e.preventDefault();
    //     const {name, email, message} = formData
    //     try {
    //         const response = await fetch(
                //  `https://v1.nocodeapi.com/Jebitok/google_sheets/YVoKJnFiwlVIsOVA`,
                // {
                //     method: "post",
                //     body: JSON.stringify([[name, email, message]]),
                //     headers: {
                //         "Content-Type": "application/json"
                //     }
                // }
    //         );
    //         const json = await response.json();
    //         console.log("Success:", JSON.stringify(json));
    //         setMessage("Success");
    //     } catch (error) {
    //         console.error("Error:", error);
    //         setMessage("Error");
    //     }
    // };

    const sendData = async e => {
        e.preventDefault();
        const {name, email, message} = formData
        try {
            const creds = require('./config/gromonish-bob8b52ccd93.json'); // the file saved above
    const doc = new GoogleSpreadsheet('1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0');
    const json = await doc.useServiceAccountAuth(creds);
    console.log("Success:", JSON.stringify(json));
            setMessage("Success");
    } catch (error) {
        console.error("Error:", error);
        setMessage("Error");
    }
        }

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
                    placeholder="Email ID"
                    required
                    onChange={handleInput}
                />
                <textarea
                    name="message"
                    placeholder="Business Name"
                    onChange={handleInput}
                />
                <input name="submit" type="submit" value="Get Started" />
                {message}
            </form>
        </div>
    );
}