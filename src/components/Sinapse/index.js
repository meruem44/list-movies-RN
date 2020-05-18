import React from 'react';

import { Container, Content, Title, Description } from './styles';

import Icon from '@expo/vector-icons/MaterialIcons';

const Sinapse = (props) => {
  return (
      <Container>
          <Content >
            <Title>{props.title}</Title>
            <Description >{props.desc}</Description>
          </Content>
          <Icon name="queue" size={30} color="#444"/>
      </Container>
  );
}

export default Sinapse;