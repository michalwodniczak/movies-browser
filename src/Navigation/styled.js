import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.almostBlack};
    min-height: 93px;
    margin: 0 auto;
`;

export const Container = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        max-width: 1000px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        flex-wrap: wrap;
        justify-content: center;
    };
`;

