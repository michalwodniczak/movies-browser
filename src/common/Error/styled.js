import styled from "styled-components";
import { SectionTitle } from '../Section/Section';
import { ReactComponent as ErrorSVG } from "../../assets/icon-error.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 180px;
    
    @media (max-width: 767px) {
        padding-top: 54px;
        gap: 16px;
	}
`;

export const StyledErrorIcon = styled(ErrorSVG)`
    width: 120px;
	height: 120px;
    pointer-events: none;

    @media (max-width: 767px) {
        width: 60px;
	    height: 60px;
	}
`;

export const Header = styled(SectionTitle)`
    margin: 0;
`;

export const Instruction = styled.h2`
    color: ${({ theme }) => theme.color.almostBlack};
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 14px;
	}
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.blue};
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    padding: 16px 24px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 10px;
        padding: 10px 16px;
	}
`;
