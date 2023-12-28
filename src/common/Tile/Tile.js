import styled from 'styled-components'
import { ReactComponent as NoPersonSVG } from "../../assets/icon-person.svg";

export const Tile = styled.article`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 40px;
	padding: 40px;
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
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
`

export const SmallTileImage = styled.img`
	width: 177px;
	height: 264px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.silver};
	color: ${({ theme }) => theme.color.white};
`

export const NoPersonIcon = styled(NoPersonSVG)`
	width: 72px;
	height: 72px;
`

export const TileImage = styled.img`
	width: 312px;
	height: 464px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.silver};
`

export const TileContent = styled.div`
	padding: 8px 0;
	display: flex;
	flex-direction: column;
	gap: 24px;
	flex-wrap: nowrap;
`

export const TileTitle = styled.h2`
	margin: 0;
	font-size: 36px;
	font-weight: 600;
	line-height: 1.2;
`

export const SmallTileTitle = styled.h2`
	margin: 4px 0 0 0;
	text-align: center;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.3;
	color: ${({ theme }) => theme.color.almostBlack};
`

export const TileSubTitle = styled.h3`
	margin: 0;
	font-size: 22px;
	line-height: 1.2;
	height: auto;
`

export const SmallTileSubTitle = styled.h3`
	margin: 0;
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.5;
	color: ${({ theme }) => theme.color.darkGray};
`

export const TileData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: 52px;
`

export const TileDataContent = styled.p`
	margin: 0;
	padding: 0;
	font-size: 18px;
	line-height: 1.2;
`

export const TileDataTitle = styled.span`
	padding-right: 10px;
	color: ${({ theme }) => theme.color.slateGray};
`

export const TileTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
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
`

export const Description = styled.p`
	margin: 0;
	padding: 0;
	font-size: 20px;
	line-height: 1.6;
`
