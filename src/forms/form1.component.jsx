import React from 'react';
import 'form.styles.scss';

const SPREADSHEET_ID = '1REnZe-BjcG81iQywnkDjcSyuGutNJkt5sK96-xYEbss/edit#gid=0';
const CLIENT_ID = '107836451793691635552';
const API_KEY = 'b0b8b52ccd939d3ea6ab70f4d2443293569d2b0b';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export default class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this); //to tie the form's callback to this class
    }
  
    componentDidMount(){ //called automatically by React
      this.handleClientLoad(); 
    }
  
    handleClientLoad =()=> { //initialize the Google API
      gapi.load('client:auth2', this.initClient);
    }
  
    initClient =()=> { //provide the authentication credentials you set up in the Google developer console
      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(()=> {
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
        this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

onFormSubmit(submissionValues) {

  const params = {
    // The ID of the spreadsheet to update.
    spreadsheetId: SPREADSHEET_ID, 
    // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
    range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
    // How the input data should be interpreted.
    valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
  };

  const valueRangeBody = {
    'majorDimension': 'ROWS', //log each entry as a new row (vs column)
    'values': [submissionValues] //convert the object's values to an array
  };

  let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function (response) {
    // TODO: Insert desired response behaviour on submission
    console.log(response.result);
  }, function (reason) {
    console.error('error: ' + reason.result.error.message);
  });
}

render() {
  //TODO: add your form fields below that you want to submit to the sheet. This just has a name field
  return (
    <Form
      onSubmit={this.onFormSubmit}
    >
      <label>
        Name:
        <Text field='name' />
      </label>
      <label>
        Email:
        <Text field='name' />
      </label>
      <label>
        Business Name:
        <Text field='name' />
      </label>
      <button type='submit'>
        Submit
      </button>
    </Form>
  )
}
}