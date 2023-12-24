import styled from 'styled-components'

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
	width: 1368px;
	height: 769px;
	background-color: ${({ theme }) => theme.color.lightBlue};
	box-shadow: inset 0 0 175px 100px ${({ theme }) => theme.color.black};
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

export const StarIcon = styled.div`
	width: 40px;
	height: 40px;
	background-color: gold;
	margin-right: 8px;
`

export const RatingContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 126px;
	height: 75px;
`

export const RatingNumber = styled.span`
	color: ${({ theme }) => theme.color.white};
	font-size: 30px;
	font-weight: 500;
	line-height: 1.3;
	margin-right: 8px;
`

export const RatingInfo = styled.span`
	color: ${({ theme }) => theme.color.white};
	font-size: 16px;
	font-weight: 400;
	line-height: 1.2;
	margin-top: 16px;
`