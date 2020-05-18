import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    padding-top: ${metrics.marginBar};
    background-color: #000;
`;

export const Scroll = styled.FlatList.attrs({

})`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
 
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-bottom: ${metrics.height * 0.05};
    margin-left:  ${metrics.width * 0.04};
    margin-top:  ${metrics.height * 0.02};
    font-size: 25px;
`;

export const Footer = styled.View`
    width: ${metrics.width};
    height: ${metrics.height * 0.2};
`;

