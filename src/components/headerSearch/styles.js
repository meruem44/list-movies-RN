import styled from 'styled-components/native';

import { metrics } from '../../styles';

export const Container = styled.View.attrs({
    style: { elevation: 10 }
})`
    margin-top: 10px;
    background-color: #fff;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 95%;
    flex-direction: row;
    align-self: center;
`;

export const Input = styled.TextInput`
    width: 85%;
    padding: 14px;
    padding-left: 20px;
    font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



