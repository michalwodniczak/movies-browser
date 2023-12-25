import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.almostBlack};
    min-height: 93px;
    margin: 0 auto;
`;

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        max-width: 1000px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        flex-wrap: wrap;
        justify-content: center;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        max-width: 100%;
    }


`;

