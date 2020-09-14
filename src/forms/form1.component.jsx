import React from 'react';
import 'form.styles.scss';

const SPREADSHEET_ID = '1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0';
const CLIENT_ID = '107836451793691635552';
const API_KEY = 'b0b8b52ccd939d3ea6ab70f4d2443293569d2b0b';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export default class Form extends React.Component {
    const {formData, setFormData} = useState({});
    const {message, setMessage} = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    render() {
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
        )
    }
}