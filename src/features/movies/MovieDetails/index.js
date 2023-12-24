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
		</>
	)
}

export default MovieDetails
