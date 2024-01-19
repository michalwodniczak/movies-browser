import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, StyledErrorIcon, Header, Instruction, StyledButton } from './styled';
import { setError } from '../../features/movies/MovieDetails/movieSlice';

const Error = () => {
    const history = useHistory();
    const location = useLocation();

    const handleBackToHomepage = () => {
        setError(null); // Reset the error state before redirecting

        // Check if the current location is MovieList, then use "reload" on the button
        if (location.pathname === '/movies') {
            window.location.reload();
        } else {
            history.push('/movies');
        }
    };

    return (
        <Container>
            <StyledErrorIcon />
            <Header>Ooops! Something went wrong...</Header>
            <Instruction>
                Please check your network connection<br />
                and try again
            </Instruction>
            <StyledButton onClick={handleBackToHomepage}>
                {location.pathname === '/movies' ? 'Reload page' : 'Back to home page'}
            </StyledButton>
        </Container>
    );
};

export default Error;
