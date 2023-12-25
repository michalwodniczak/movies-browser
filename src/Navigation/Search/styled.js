import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../assets/icon-search.svg";

export const Wrapper = styled.label`
    margin:0 auto;
    width: 432px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius:33px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    padding:4px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px){
        margin:10px 0;
        width: 500px;
    }
`;

export const Input = styled.input`
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGray};
    line-height: 150%;
    text-align: justify;
    padding-left:16px;
    border: none;

    &:focus{
        outline:none;
    };
`;

export const Icon = styled(searchIcon)`
    margin-left:24px;
    position: relative;
    top:6px;
`;