import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';

const AnimatedPage = ({ children }) => {
    const history = useHistory();

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 800,
        },
        onRest: () => {
        },
    });

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    );
};

export default AnimatedPage;
