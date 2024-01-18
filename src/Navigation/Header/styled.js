import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../assets/icon-video.svg"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        gap: 8px;
        justify-content: space-between;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        justify-content: center;
        flex-wrap: wrap;
    };
`

export const Logo = styled(WebsiteLogo)`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 17px;
        height: 17px;
    };
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.color.white};
    text-transform: capitalize;
    min-width: fit-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    };

`

export const StyledList = styled.ul`
    margin: 23px 78px 23px 68px;
    list-style-type: none;
    display: flex;
    gap: 16px;
    color: ${({ theme }) => theme.color.white};
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-left: 8px;
        margin-right: 8px;
        gap: 12px
    };

    @media (max-width: 767px){
        gap: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        margin: 0;
    };

`

export const StyledNavLink = styled(NavLink)`
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 46px;
    padding: 0px 24px;
    position: relative;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid transparent;

    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 0.5px;
        bottom: -1px;
        left: 25%;
        background-color: transparent;
        transition: background-color 0.6s ease-in-out;
    }

    &:hover::after {
        background-color: ${({ theme }) => theme.color.white};
        bottom: -1px;
    }

    &.active{
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 12px;
        line-height: 32px;
        padding: 0px 12px;
        
        &.active{
            border-radius: 29px;
        };
    };
`;