import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    column-gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        flex-wrap: wrap;
        justify-content: center;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding-bottom: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        padding-top: 16px;
    };
`;

