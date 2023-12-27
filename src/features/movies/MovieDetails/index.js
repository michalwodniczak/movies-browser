import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieId, selectLoading, selectMovieDetails } from '../movieSlice';

import { Main } from '../../../common/Main/Main';
import Rating from '../../../common/Rating/Rating';
import { Section, SectionTitle } from '../../../common/Section/Section';
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
} from '../../../common/Tile/Tile';
import {
	Header,
	MainHeader,
	Backdrop,
	TitleContainer,
	TitlePrimary,
} from './styled';

function MovieDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMovieId(id))
	}, []);

	const loading = useSelector(selectLoading);
	const movieDetails = useSelector(selectMovieDetails);

	return loading ? (
		'ładowanie'
	) : (
		<>
			<MainHeader />
			<Header>
				<Backdrop $background={movieDetails.backdropURL}>
					<TitleContainer>
						<TitlePrimary>{movieDetails.title}</TitlePrimary>
						<Rating
							voteCount={movieDetails.votes}
							ratingValue={movieDetails.rating.toLocaleString('pl-PL', {
								maximumFractionDigits: 1,
							})}
							isOnBackdrop={true}
							isOnMainTile={false}
						/>
					</TitleContainer>
				</Backdrop>
			</Header>
			<Main>
				<Tile>
					<TileImage src={movieDetails.posterURL} />
					<TileContent>
						<TileTitle>{movieDetails.title}</TileTitle>
						<TileSubTitle>YYYY</TileSubTitle>
						<TileData>
							<TileDataContent>
								<TileDataTitle>Production:</TileDataTitle>
								{movieDetails.production
									.map((country) => country.name)
									.toString()}
							</TileDataContent>
							<TileDataContent>
								<TileDataTitle>Release date:</TileDataTitle>
								{movieDetails.date}
							</TileDataContent>
						</TileData>
						<TileTags>
							{movieDetails.genres.map(({ name }) => (
								<TileTag>{name}</TileTag>
							))}
						</TileTags>
						<Rating
							voteCount={movieDetails.votes}
							ratingValue={movieDetails.rating.toLocaleString('pl-PL', {
								maximumFractionDigits: 1,
							})}
							isOnBackdrop={false}
							isOnMainTile={true}
						/>
						<Description>{movieDetails.description}</Description>
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
};

export default MovieDetails;
