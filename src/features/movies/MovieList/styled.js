import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as NoMovieSVG } from "../../../assets/icon-video.svg";

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`

export const SectionWrapper = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	width: 100%;

	@media (max-width: 767px) {
		gap: 16px;
	}
`

export const Tile = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	gap: 16px;
    max-width: 324px;
    height: 100%;
	min-height: 650px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

	@media (max-width: 767px) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: none;
		height: auto;
		min-height: 201px;
		min-width: 288px;
	}
`

export const TileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 1;
	max-width: 292px;
	height: 434px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.silver};
	color: ${({ theme }) => theme.color.white};

	@media (max-width: 767px) {
		width: 114px;
		height: 169px;
	}
`

export const TileImage = styled.img`
	flex-shrink: 1;
	max-width: 292px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.silver};

	@media (max-width: 767px) {
		width: 114px;
	}
`

export const NoMovieIcon = styled(NoMovieSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: 767px) {
		width: 48px;
		height: 48px;
	}
`

export const TileContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const TileTitle = styled.h2`
	margin: 0;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.3;
	color: ${({ theme }) => theme.color.almostBlack};

	@media (max-width: 767px) {
		font-size: 16px;
	}
`

export const TileSubTitle = styled.h3`
	margin: 0;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	height: auto;
	color: ${({ theme }) => theme.color.darkGray};

	@media (max-width: 767px) {
		font-size: 13px;
		line-height: 1.3;
	}
`

export const TileTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;

	@media (max-width: 767px) {
		margin: 4px 0;
		gap: 8px;
	}
`

export const TileTag = styled.div`
	padding: 8px 16px;
	background-color: ${({ theme }) => theme.color.gray};
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.color.almostBlack};
	font-size: 14px;
	line-height: 1;

	@media (max-width: 767px) {
		padding: 4px 8px;
		font-size: 10px;
		line-height: 1.1;
	}
`

export const Rating = styled.div`
	margin-top: auto;

	@media (max-width: 767px) {
		margin: 0;
	}
`