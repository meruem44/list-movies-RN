import styled from 'styled-components/native';

import { metrics } from '../../styles';

export const Container = styled.TouchableOpacity`
    width: ${metrics.width * 0.6};
    height: ${metrics.height * 0.48};
`;

export const Image = styled.Image`
    align-self: center;
    border-radius: 12px;
    width: ${metrics.width * 0.6};
    height: ${metrics.height * 0.48};
    background-color: rgba(0,0,0,0.5);
`;

export const Title = styled.Text`
    padding: 15px;
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 2;
    font-weight: bold;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right:10px;
`;
