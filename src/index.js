import React from 'react';
import { StatusBar } from 'react-native';

import App from './pages/home';

const Initial = () => {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <App />
        </>
    );
}

export default Initial;