import React, { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import './form.styles.scss';

// const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL

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
        const doc = new GoogleSpreadsheet('1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0');
// use service account creds
// await doc.useServiceAccountAuth({
//   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   private_key: process.env.GOOGLE_PRIVATE_KEY,
// });
// // OR load directly from json file if not in secure environment
// await doc.useServiceAccountAuth(require('./config/gromonish-bob8b52ccd93.json'));
// OR use service account to impersonate a user (see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority)
await doc.useServiceAccountAuth(require('./config/gromonish-bob8b52ccd93.json'), 'gromonish@gromonish.iam.gserviceaccount.com');
// OR use API key -- only for read-only access to public sheets
doc.useApiKey('b0b8b52ccd939d3ea6ab70f4d2443293569d2b0b');

await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);
await doc.updateProperties({ title: 'renamed doc' });

const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
console.log(sheet.title);
console.log(sheet.rowCount);

// adding / removing sheets
const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
await newSheet.delete();
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