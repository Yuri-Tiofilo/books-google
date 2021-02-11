import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';

import {
  Container,
  Card,
  ImageCard,
  ImageNotExist,
  TextImageExist,
} from './styles';
import { ListBooks } from '../../interfaces/books';

interface PropsSlick {
  data?: ListBooks[];
}

const Slick: React.FC<PropsSlick> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 8,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {data?.map((element) => (
          <Card key={element.id}>
            {element.volumeInfo?.imageLinks?.thumbnail ? (
              <ImageCard
                src={element.volumeInfo?.imageLinks?.thumbnail}
                alt=""
              />
            ) : (
              <ImageNotExist>
                <TextImageExist>Image not exist</TextImageExist>
              </ImageNotExist>
            )}
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Slick;
