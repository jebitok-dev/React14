import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './testimonial.styles.scss';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      >
        <div>
          <img src="/images/2.png" alt="1" />
          <div className="myCarousel">
            <p>
              It's freeing to be able to catch up on customized books and not be
              distracted by a bunch of books on the same site
            </p>
          </div>
        </div>
        <div>
          <img src="/images/2.png" alt="2" />
          <div className="myCarousel">
            <p>
            It's freeing to be able to catch up on customized books and not be
              distracted by a bunch of books on the same site
            </p>
          </div>
        </div>
        <div>
          <img src="/images/2.png" alt="3" />
          <div className="myCarousel">
            <p>
            It's freeing to be able to catch up on customized books and not be
              distracted by a bunch of books on the same sites
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
