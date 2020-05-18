import React from 'react';

import { Container, Image, Title, Button } from './styles';

import Icon from '@expo/vector-icons/MaterialIcons';

const ItemSlide = ({ item, index }) => {
    return (
        <Container>
            <Image source={{ uri: item.img }} />
            <Title>{item.title}</Title>
            <Button>
                <Icon
                    color="#fff"
                    size={30}
                    name="play-circle-outline" />
            </Button>
        </Container>
    );
}

export default ItemSlide;