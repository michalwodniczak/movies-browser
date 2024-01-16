import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, StyledErrorIcon, Header, Instruction, StyledButton } from './styled';
import { setError } from '../../features/movies/MovieDetails/movieSlice';

const Error = () => {
    const history = useHistory();

    const handleBackToHomepage = () => {
        setError(null); // Reset the error state before redirecting
        history.push('/movies');
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
                Back to homepage
            </StyledButton>
        </Container>
    );
};

export default Error;
