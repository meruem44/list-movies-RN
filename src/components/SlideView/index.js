import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Container } from './styles';

import { metrics } from '../../styles';

import ItemSlide from '../ItemSlide';

const SlideView = (props) => {
  return (
      <Container>
          <Carousel 
            ref={props.ref}
            style={{ flex: 1, overflow: 'visible' }}
            data={props.data}
            renderItem={ItemSlide}
            sliderWidth={metrics.width}
            itemWidth={metrics.width * 0.6}
            onSnapToItem={props.changeBackground}
            inactiveSlideOpacity={0.5}
        />
      </Container>
  );
}

export default SlideView;