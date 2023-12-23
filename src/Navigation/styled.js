import styled from "styled-components"

export const Wrapper = styled.div`
    max-width: 1920px;
    background-color: ${({ theme }) => theme.color.almostBlack};
    min-height: 93px;
`;

export const Container = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        gap: 20px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    
    };

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        max-width: 300px;;
    }
`;