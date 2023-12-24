import styled from 'styled-components'

export const Tile = styled.article`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 40px;
	padding: 40px;
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
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

export const TileSubTitle = styled.h3`
	margin: 0;
	font-size: 22px;
	line-height: 1.2;
	height: auto;
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
