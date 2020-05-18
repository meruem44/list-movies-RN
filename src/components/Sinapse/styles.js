import styled from 'styled-components/native';

import { metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

`;

export const Content = styled.View`
     padding-left: 15px;
`;


export const Title = styled.Text`
    color: #131313;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 5px;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 4
})`
    color: #131313;
    font-weight: bold;
    font-size: 14px;
    width: ${metrics.width * 0.75};
`;

