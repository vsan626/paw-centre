import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const MainBanner = () => (
  <div>
    <Jumbotron fluid="true">
      <img
        className="mainImg"
        src="https://pawcentre.s3.us-east-2.amazonaws.com/IMG_3128.JPG"
      />
      <div className="jumbo-content">
        <h1>Hello, Hoomans!</h1>
        <p>Snoop around and get your furry friend a nice gift!</p>
        <p>
          <Button variant="outline-secondary">Shop Now...Woof!</Button>
        </p>
      </div>
    </Jumbotron>

    <style jsx>{`
      .mainImg {
        height: 100%;
        width: 100%;
      }
      .jumbo-content {
        text-align: center;
      }
    `}</style>
  </div>
);

export default MainBanner;
