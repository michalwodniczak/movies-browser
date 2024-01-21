import {
    Header,
    Backdrop,
    Vignette,
    TitleContainer,
    Title,
} from './styled'
import Rating from '../../../../common/Rating/Rating'

export const BackdropHeader = ({
    backgroundURL,
    title,
    voteCount,
    ratingValue
}) => (
    <Header>
        <Backdrop $background={backgroundURL}>
            <Vignette />
            <TitleContainer>
                <Title>{title}</Title>
                <Rating
                    voteCount={voteCount}
                    ratingValue={ratingValue}
                    isOnBackdrop={true}
                    isOnMainTile={false}
                />
            </TitleContainer>
        </Backdrop>
    </Header>
);