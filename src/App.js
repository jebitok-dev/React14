import React, { Component } from 'react';
import './App.css';
import Testimonials from './testimonial/testimonial';
import Contact from './forms/form2.component';
import { modal } from 'bootstrap'


class App extends Component  {
   render() {
    return (
      <div className="App">
        <h1 className="header">Gromoni</h1>
        <h3>How it Works</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing consequat sem vel fermentum nisl et.
      Erat a ac blandit neque amet pharetra ornare non nibh. Quam ultrices integer neque cras cum quam egestas faucibus. 
      Non blandit at in sem ipsum est est.</p>
      {/* //Testimonial */}
        <h3>Testimonials</h3>
        <Testimonials />
        <Modal>
          <Modal.Content>
              <Contact ref="onSubmit" />
          </Modal.Content>
        </Modal>
      </div>
    );
  }  
}
  
export default App;
