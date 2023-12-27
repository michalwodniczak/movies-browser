import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../assets/icon-search.svg";

export const Wrapper = styled.label`
    width: 432px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    padding: 4px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        margin: 10px 0;
        width: 500px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        width: 360px;
        display: flex;
    };
`;

export const Input = styled.input`
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGray};
    line-height: 150%;
    text-align: justify;
    border: none;

    &:focus{
        outline: none;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        width: 100%;
        line-height: 130%;
    };
`;

export const Icon = styled(searchIcon)`
    margin-left: 24px;
    position: relative;
    top: 6px;
    right: 10px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px){
        width: 16px;
        height: 16px;
        top: 4px;
    };
`;