import { useDispatch } from 'react-redux';
import {
	Wrapper,
	StyledButton,
	ButtonText,
	Chevron,
	ChevronLeft,
	MobileChevron,
	MobileChevronLeft,
	TextContainer,
	RegularText,
	BoldText,
} from './styled';

const Pagination = ({ currentPage, goToFirstPage, decrementPage, incrementPage }) => {
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<StyledButton
				onClick={() => dispatch(goToFirstPage())}
				disabled={currentPage < 2}
			>
				<ChevronLeft />
				<MobileChevronLeft />
				<ButtonText>First</ButtonText>
			</StyledButton>
			<StyledButton
				onClick={() => dispatch(decrementPage())}
				disabled={currentPage < 2}
			>
				<ChevronLeft />
				<ButtonText>Previous</ButtonText>
			</StyledButton>
			<TextContainer>
				<RegularText>Page</RegularText>
				<BoldText>{currentPage}</BoldText>
				<RegularText>of</RegularText>
				<BoldText>500</BoldText>
			</TextContainer>
			<StyledButton onClick={() => dispatch(incrementPage())}>
				<ButtonText>Next</ButtonText>
				<Chevron />
			</StyledButton>
			<StyledButton disabled={true}>
				<ButtonText>Last</ButtonText>
				<Chevron />
				<MobileChevron />
			</StyledButton>
		</Wrapper>
	);
};

export default Pagination;