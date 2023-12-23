import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	incrementPage,
	decrementPage,
	goToFirstPage,
	pageNumberFromURL,
	selectPageState,
} from './paginationSlice';
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

const Pagination = () => {
	const dispatch = useDispatch();
	const currentPage = useSelector(selectPageState);

	const location = useLocation();
	const query = new URLSearchParams(location.search).get('page');

	useEffect(() => {
		dispatch(pageNumberFromURL(query));
	}, [query]);

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
