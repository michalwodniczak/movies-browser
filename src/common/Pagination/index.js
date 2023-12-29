import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
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
	const history = useHistory();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get('page');

	useEffect(() => {
		if (query < 1) {
			searchParams.set('page', 1);
		} else {
			dispatch(pageNumberFromURL(query));
		}
	}, [query]);

	useEffect(() => {

		history.push(`${location.pathname}?page=${currentPage}`);
	}, [currentPage]);

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
