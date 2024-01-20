import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedPage = ({ children }) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 400,
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
