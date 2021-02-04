import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';

import {
  Container,
  Card,
  ImageCard,
  ImageNotExist,
  TextImageExist,
} from './styles';
import { ListBooks } from '../../dtos/books';

interface PropsSlick {
  data?: ListBooks[];
}

interface PropsSettingSlick {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

const Slick: React.FC<PropsSlick> = ({ data }) => {
  const [stateSettings, setStateSettings] = useState<PropsSettingSlick>(
    {} as PropsSettingSlick,
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  const settingsDesktop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: false,
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setStateSettings(settings);
    } else {
      setStateSettings(settingsDesktop);
    }
  }, []);

  console.log(stateSettings);

  return (
    <Container>
      <Slider {...stateSettings}>
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
