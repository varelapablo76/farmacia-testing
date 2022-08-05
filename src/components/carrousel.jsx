import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from 'react-player' 

const Carrousel = () => {
  return (
    <Carousel variant="dark" controls={false} indicators={false} fade className='w-auto h-auto'  >
      <Carousel.Item className='carousel-img' interval={2000} >
        <img
          className="d-block w-100"
          src='offer/BannerTV-49-1.jpg'
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img' interval={2000} >
        <img
          className="img-fluid"
          src="offer/BannerTV-49-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img'interval={2000} >
        <img
          className="d-block img-fluid"
          src="offer/BannerTV-49-3.jpg"
          alt="Tercer slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-img'interval={15000} >
          <ReactPlayer
          url="offer/eucerin1.mp4"
          width='100%'
          height='100%'
          controls={false}
          playing={true}
          muted={true}
          loop={true}
          />

      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
