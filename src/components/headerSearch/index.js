import React from 'react';

import { Container, Input, Button } from './styles';

import Icon from '@expo/vector-icons/MaterialIcons'

const headerSearch = (props) => {
  return (
    <Container>
        <Input placeholder={props.place}/>
        <Button>
            <Icon name="search" color="#444" size={35} />
        </Button>
    </Container>
  );
}

export default headerSearch;