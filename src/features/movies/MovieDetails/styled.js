import styled, { css } from 'styled-components'

export const MainHeader = styled.header`
	height: 94px;
	width: 100%;
	background-color: ${({ theme }) => theme.color.black};
`

export const Header = styled.div`
	background-color: ${({ theme }) => theme.color.black};
`

export const Backdrop = styled.div`
	display: flex;
	margin: auto;
	max-width: 1368px;
	height: 769px;
	background-color: ${({ theme }) => theme.color.lightBlue};
	box-shadow: inset 0 0 175px 100px ${({ theme }) => theme.color.black};
    
    @media (max-width: 1400px) {
		padding-left: 16px;
        padding-right: 16px;
	}
`

export const TitleContainer = styled.div`
	z-index: 2;
	align-self: flex-end;
	margin-bottom: 54px;
`

export const TitlePrimary = styled.h1`
	color: ${({ theme }) => theme.color.white};
	font-size: 64px;
	font-weight: 600;
	line-height: 120%;
	margin: 0 0 24px 0;
`