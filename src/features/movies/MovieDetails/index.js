import { Main } from '../../../common/Main/Main'
import {
	Description,
	Tile,
	TileContent,
	TileData,
	TileDataContent,
	TileDataTitle,
	TileImage,
	TileSubTitle,
	TileTag,
	TileTags,
	TileTitle,
} from '../../../common/Tile/Tile'
import {
	Header,
	MainHeader,
	Backdrop,
	RatingContainer,
	RatingInfo,
	RatingNumber,
	StarIcon,
	TitleContainer,
	TitlePrimary,
} from './styled'

function MovieDetails() {
	return (
		<>
			<MainHeader />
			<Header>
				<Backdrop>
					<TitleContainer>
						<TitlePrimary>Movie very very long title</TitlePrimary>
						<RatingContainer>
							<StarIcon />
							<RatingNumber>7,8</RatingNumber>
							<RatingInfo>/ 10</RatingInfo>
							<RatingInfo>335 votes</RatingInfo>
						</RatingContainer>
					</TitleContainer>
				</Backdrop>
			</Header>
			<Main>
				<Tile>
					<TileImage />
					<TileContent>
						<TileTitle>Movie short title</TileTitle>
						<TileSubTitle>YYYY</TileSubTitle>
						<TileData>
							<TileDataContent>
								<TileDataTitle>Production:</TileDataTitle>
								Country1, Country2...
							</TileDataContent>
							<TileDataContent>
								<TileDataTitle>Release date:</TileDataTitle>
								DD.MM.YYYY
							</TileDataContent>
						</TileData>
						<TileTags>
							<TileTag>Genre1</TileTag>
							<TileTag>Genre2</TileTag>
							<TileTag>Genre3</TileTag>
						</TileTags>
						<p>Rating</p>
						<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis molestias officia! Tenetur eum debitis, alias architecto officiis eligendi reprehenderit ea suscipit esse accusantium maxime ut dignissimos? Non, qui delectus.
						</Description>
					</TileContent>
				</Tile>
			</Main>
		</>
	)
}

export default MovieDetails
