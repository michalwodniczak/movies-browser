import styled from 'styled-components'
import { ReactComponent as NoPersonSVG } from "../../assets/icon-person.svg";
import { ReactComponent as NoMovieSVG } from "../../assets/icon-noMovie.svg";

export const Tile = styled.article`
	margin-top: 64px;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 40px;
	padding: 40px;
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

	@media (max-width: 767px) {
		margin-top: 16px;
		gap: 16px;
		padding: 16px;
	}
`

export const SmallTile = styled.article`
	width: 208px;
	height: 100%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

	@media (max-width: 767px) {
		width: 136px;
		padding: 8px;
	}
`

export const SmallTileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 177px;
	height: 264px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.silver};
	color: ${({ theme }) => theme.color.white};

	@media (max-width: 767px) {
		width: 120px;
		height: 178px;
	}
`

export const SmallTileImage = styled.img`
	width: 177px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.silver};
	color: ${({ theme }) => theme.color.white};

	@media (max-width: 767px) {
		width: 120px;
	}
`

export const NoPersonIcon = styled(NoPersonSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: 767px) {
		width: 48px;
		height: 48px;
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

export const TileImage = styled.img`
	width: 312px;
	height: 464px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.silver};

	@media (max-width: 767px) {
		width: 114px;
		height: 169px;
	}
`

export const TileContent = styled.div`
	padding: 8px 0;
	display: flex;
	flex-direction: column;
	gap: 24px;
	flex-wrap: nowrap;

	@media (max-width: 767px) {
		gap: 4px;
	}
`

export const TileTitle = styled.h2`
	margin: 0;
	font-size: 36px;
	font-weight: 600;
	line-height: 1.2;

	@media (max-width: 767px) {
		font-size: 16px;
		font-weight: 500;
		line-height: 1.3;
		color: ${({ theme }) => theme.color.almostBlack};
	}
`

export const SmallTileTitle = styled.h2`
	margin: 4px 0 0 0;
	text-align: center;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.3;
	color: ${({ theme }) => theme.color.almostBlack};

	@media (max-width: 767px) {
		font-size: 14px;
	}
`

export const TileSubTitle = styled.h3`
	margin: 0;
	font-size: 22px;
	line-height: 1.2;
	height: auto;

	@media (max-width: 767px) {
		font-size: 13px;
		line-height: 1.3;
		color: ${({ theme }) => theme.color.darkGray};
	}
`

export const SmallTileSubTitle = styled.h3`
	margin: 0;
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.5;
	color: ${({ theme }) => theme.color.darkGray};


	@media (max-width: 767px) {
		font-size: 13px;
		line-height: 1.3;
	}
`

export const TileData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: 52px;

	@media (max-width: 767px) {
		margin-top: 4px;
	}
`

export const TileDataContent = styled.p`
	margin: 0;
	padding: 0;
	font-size: 18px;
	line-height: 1.2;

	@media (max-width: 767px) {
		font-size: 12px;
		line-height: 1.3;
	}
`

export const TileDataTitle = styled.span`
	padding-right: 10px;
	color: ${({ theme }) => theme.color.slateGray};

	@media (max-width: 767px) {
		display: none;
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

export const Description = styled.p`
	margin: 0;
	padding: 0;
	font-size: 20px;
	line-height: 1.6;

	@media (max-width: 767px) {
		font-size: 14px;
	}
`