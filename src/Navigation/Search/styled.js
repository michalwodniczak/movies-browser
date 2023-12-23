import styled from "styled-components";
import {ReactComponent as searchIcon} from "../../assets/icon-search.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){    
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        max-width: 700px;
        width: 100%;
        padding: 30px;
    };
`;
export const Input = styled.input`
    max-width: 400px;
    border-radius:25px;
    font-size: 16px;
    color: ${({theme}) => theme.color.darkGray};
    line-height: 150%;
    padding: 10px;
    text-align: center;
    border: none;

    &:focus{
        outline:none;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px){    
        max-width: 766px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        font-size: 13px;
        line-height: 130%;
    };
`;

export const Icon = styled(searchIcon)`
    position: relative;
    left: 50px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        top: 33px;
        right: 200px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        left:20px;
    }

`;