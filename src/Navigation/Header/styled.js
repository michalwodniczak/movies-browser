import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoWebsite } from "./logo.svg"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 5px;
`;

export const Logo = styled(LogoWebsite)`
    width: 40px;
    height: 40px;
    position: relative;
    top: 2px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        width: 17px;
        height: 17px;
    };
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    };
`;

export const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 40px;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px){
        gap: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        gap: 12px;
    };

    @media (max-width: ${({theme}) => theme.breakpoints.smallPhone}px){
        padding:0;
    };
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    padding: 13px 24px;

    &.active{
        color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
        padding: 8px 12px;
        
        &.active{
            border-radius: 29px;
        };
    };
`;