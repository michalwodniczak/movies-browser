import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPageState } from '../../features/movies/MovieList/movieListSlice';
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
import paginationParamName from '../../utils/paginationParamName';

const Pagination = ({ totalPages }) => {
	const currentPage = useSelector(selectPageState);
	const location = useLocation();
	const history = useHistory();

	const searchParams = new URLSearchParams(location.search);
	const pageParam = searchParams.get(paginationParamName);

	const maxPages = totalPages || pageLimit;

	const onIncrement = () => {
		searchParams.set(paginationParamName, +pageParam + 1);
		history.push(`${location.pathname}?${searchParams.toString()}`);
	};

	const onDecrement = () => {
		searchParams.set(paginationParamName, +pageParam - 1);
		history.push(`${location.pathname}?${searchParams.toString()}`);
	};

	const onToFirstPage = () => {
		searchParams.set(paginationParamName, 1);
		history.push(`${location.pathname}?${searchParams.toString()}`);
	};

	const onToLastPage = () => {
		searchParams.set(paginationParamName, maxPages);
		history.push(`${location.pathname}?${searchParams.toString()}`);
	};

	return (
		<Wrapper>
			<StyledButton
				onClick={onToFirstPage}
				disabled={currentPage < 2}
			>
				<ChevronLeft />
				<MobileChevronLeft />
				<ButtonText>First</ButtonText>
			</StyledButton>
			<StyledButton
				onClick={onDecrement}
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
				onClick={onIncrement}
				disabled={currentPage > (maxPages - 1)}
			>
				<ButtonText>Next</ButtonText>
				<Chevron />
			</StyledButton>
			<StyledButton
				onClick={onToLastPage}
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