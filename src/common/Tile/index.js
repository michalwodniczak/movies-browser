import { posterURL } from "../../utils/API/APIURLS";
import {
	Tile,
	SmallTile,
	DetailTile,
	TileImageContainer,
	SmallTileImageContainer,
	DetailTileImageContainer,
	TileContent,
	DetailTileContent,
	TileTitle,
	SmallTileTitle,
	DetailTileTitle,
	TileSubTitle,
	SmallTileSubTitle,
	DetailTileSubTitle,
	TileData,
	TileDataContent,
	TileDataTitle,
	TileTags,
	TileTag,
	TileImage,
	NoMovieIcon,
	NoPersonIcon,
	RatingContainer,
	Description,
	TileDataTitleException,
} from "./styled";
import Rating from "../Rating/Rating";

export const ListTileLarge = (
	{
		posterPath,
		title,
		subtitle,
		role,
		tags,
		voteCount,
		ratingValue
	}) => {

	return (
		<Tile >
			<TileImageContainer>
				{posterPath
					?
					<TileImage
						src={`${posterURL}${posterPath}`}
						alt=""
					/>
					:
					<NoMovieIcon />
				}
			</TileImageContainer>
			<TileContent>
				<TileTitle>{title ? title : "No title available"}</TileTitle>
				<TileSubTitle>
					{
						role
							? `${role} (${subtitle})`
							: `${subtitle}`
					}
				</TileSubTitle>
				{tags && tags.filter(
					name => name &&
						name.trim() !== ''
				).length > 0 && (
						<TileTags>
							{tags.map(name => (
								name &&
								name.trim() !== '' &&
								<TileTag key={name}>{name}</TileTag>
							))}
						</TileTags>
					)}
				<RatingContainer>
					<Rating
						voteCount={voteCount}
						ratingValue={ratingValue}
					/>
				</RatingContainer>
			</TileContent>
		</Tile>
	)
};

export const ListTileSmall = (
	{
		posterPath,
		title,
		subtitle
	}) => {

	return (
		<SmallTile >
			<SmallTileImageContainer>
				{posterPath
					?
					<TileImage
						src={`${posterURL}${posterPath}`}
						alt=""
					/>
					:
					<NoPersonIcon />
				}
			</SmallTileImageContainer>
			<SmallTileTitle>{title}</SmallTileTitle>
			<SmallTileSubTitle>{subtitle}</SmallTileSubTitle>
		</SmallTile>
	)
};

export const DetailsTile = (
	{
		movieTile,
		posterPath,
		title,
		subtitle,
		firstData,
		secondData,
		tags,
		voteCount,
		ratingValue,
		isOnMainTile,
		isOnBackdrop,
		description
	}) => {

	return (
		<DetailTile>
			<DetailTileImageContainer>
				{posterPath
					?
					<TileImage
						src={`${posterURL}${posterPath}`}
						alt=""
					/>
					:
					movieTile ? <NoMovieIcon /> : <NoPersonIcon />
				}
			</DetailTileImageContainer>
			<DetailTileContent>
				<DetailTileTitle>
					{title}
				</DetailTileTitle>
				{movieTile &&
					<DetailTileSubTitle>
						{subtitle}
					</DetailTileSubTitle>
				}
				{firstData &&
					<TileData>
						<TileDataContent>
							<TileDataTitle>
								{
									movieTile ? `Production: ` : `Date of birth: `
								}
							</TileDataTitle>
							<TileDataTitleException $personTile={!movieTile}>
								{`Birth: `}
							</TileDataTitleException>
							{firstData}
						</TileDataContent>
						<TileDataContent>
							<TileDataTitle>
								{
									movieTile ? `Release date: ` : `Place of birth: `
								}
							</TileDataTitle>
							<TileDataTitleException $personTile={!movieTile}>
								{`Place of birth: `}
							</TileDataTitleException>
							{secondData}
						</TileDataContent>
					</TileData>
				}
				{
					!description &&
					<TileData>
					<TileDataContent>
						{
							movieTile
								? `No description available.`
								: `No biography available.`
						}
					</TileDataContent>
					</TileData>
				}
				{movieTile &&
					<>
						<TileTags>
							{tags.map(({ name }) => (
								<TileTag key={name}>{name}</TileTag>
							))}
						</TileTags>
						<Rating
							voteCount={voteCount}
							ratingValue={ratingValue}
							isOnBackdrop={isOnBackdrop}
							isOnMainTile={isOnMainTile}
						/>
					</>
				}
			</DetailTileContent>
			{description &&
				<Description>
					{description}
				</Description>
			}
		</DetailTile>
	)
};