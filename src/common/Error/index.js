import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, StyledErrorIcon, Header, Instruction, StyledButton } from './styled';

const Error = ({ error }) => {
    const history = useHistory();
    const location = useLocation();

    const handleBackToHomepage = () => {
        history.push('/movies?page=1');
    };

    return (
        <Container>
            <StyledErrorIcon />
            <Header>Ooops! Something went wrong...</Header>
            <Instruction>
                {error.message}<br />
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
