import React from 'react';

import PieContainer from '../components/shy-tories/PieContainer';
import IntroContainer from '../components/shy-tories/IntroContainer';
import ExplanationContainer from '../components/shy-tories/ExplanationContainer';

function ShyTory() {
    return (
        <div>
            <IntroContainer />
            <PieContainer />
            <ExplanationContainer />
        </div>
    )
}

export default ShyTory;