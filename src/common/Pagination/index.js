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
import pageLimit from "../../utils/pageLimit";

const Pagination = ({
	currentPage,
	goToFirstPage,
	goToLastPage,
	decrementPage,
	incrementPage,
	totalPages,
}) => {
	const dispatch = useDispatch();
	const maxPages = totalPages || pageLimit;

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
				<BoldText>{maxPages}</BoldText>
			</TextContainer>
			<StyledButton 
				onClick={() => dispatch(incrementPage())}
				disabled={currentPage > (maxPages - 1)}
			>
				<ButtonText>Next</ButtonText>
				<Chevron />
			</StyledButton>
			<StyledButton 
				onClick={() => dispatch(goToLastPage(maxPages))}
				disabled={currentPage > (maxPages - 1)}
			>
				<ButtonText>Last</ButtonText>
				<Chevron />
				<MobileChevron />
			</StyledButton>
		</Wrapper>
	);
};

export default Pagination;