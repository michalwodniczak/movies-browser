import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieId, selectLoading } from '../movieSlice'

import { Main } from '../../../common/Main/Main'
import Rating from '../../../common/Rating/Rating'
import { Section, SectionTitle } from '../../../common/Section/Section'
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
	TitleContainer,
	TitlePrimary,
} from './styled'

function MovieDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setMovieId(id))
	}, [])

	const loading = useSelector(selectLoading);

	return (
		loading ?
		'ładowanie'
		: <>
			<MainHeader />
			<Header>
				<Backdrop>
					<TitleContainer>
						<TitlePrimary>Movie very very long title</TitlePrimary>
						<Rating
							voteCount={'335'}
							ratingValue={'7,8'}
							isOnBackdrop={true}
							isOnMainTile={false}
						/>
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
						<Rating
							voteCount={'335'}
							ratingValue={'7,8'}
							isOnBackdrop={false}
							isOnMainTile={true}
						/>
						<Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							blanditiis molestias officia! Tenetur eum debitis, alias
							architecto officiis eligendi reprehenderit ea suscipit esse
							accusantium maxime ut dignissimos? Non, qui delectus.
						</Description>
					</TileContent>
				</Tile>
				<Section>
					<SectionTitle>Cast</SectionTitle>
					<ul>
						<li>person1</li>
						<li>person2</li>
						<li>person3</li>
						<li>person4</li>
						<li>person5</li>
						<li>person6</li>
					</ul>
				</Section>
				<Section>
					<SectionTitle>Crew</SectionTitle>
					<ul>
						<li>person1</li>
						<li>person2</li>
						<li>person3</li>
						<li>person4</li>
						<li>person5</li>
						<li>person6</li>
					</ul>
				</Section>
			</Main>
		</>
	)
}

export default MovieDetails
