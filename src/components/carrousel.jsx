import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from 'react-player'

const Carrousel = () => {
  return (
    <Carousel variant="dark" controls={true} indicators={false} fade className='w-auto h-auto'  >
      <Carousel.Item className='carousel-img' >
        <img
          className="d-block w-100"
          src="offer/v1.5BannerTV-13.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img' >
        <img
          className="d-block w-100"
          src="offer/v1.5BannerTV-13.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img'>
        <img
          className="d-block w-100"
          src="offer/v1.5BannerTV-14.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img'>
          <ReactPlayer
          url='offer/vichy-1.mp4'
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          muted={true}
          loop={true}
          />
      {/* <video style={{height:'100%',width:'100%'}} autoplay>
        <source src="offer/vichy-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video> */}

      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
