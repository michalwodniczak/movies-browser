import { RatingContainer, RatingMax, RatingNumber, RatingVotes, StarIcon } from './styled'

const Rating = ({voteCount, ratingValue, isOnBackdrop, isOnMainTile}) => {
	return (
		<RatingContainer $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
			{ !voteCount ?
            <RatingVotes $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
                No votes yet
            </RatingVotes>    
            : <>
                <StarIcon $backdrop={isOnBackdrop}/>
                <RatingNumber $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
                    {ratingValue}
                </RatingNumber>
                <RatingMax $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
                    / 10
                </RatingMax>
                <RatingVotes $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
                    {voteCount} votes
                </RatingVotes>
            </>
            }
		</RatingContainer>
	)
};

export default Rating 