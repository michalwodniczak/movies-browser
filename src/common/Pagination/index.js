import { useHistory, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';

const Pagination = ({ totalPages }) => {
	const location = useLocation();
	const history = useHistory();

	const searchParams = new URLSearchParams(location.search);
	const pageParam = searchParams.get(paginationParamName);

	const maxPages = totalPages || pageLimit;

	const limitedPageParam = () => {
		if (+pageParam < 1 || !pageParam) {
			return 1;
		} if (+pageParam >= (maxPages + 1)) {
			return maxPages;
		} else {
			return Math.floor(+pageParam);
		};
	};

	useEffect(() => {
		if (+pageParam < 1) {
			return (
				searchParams.set(paginationParamName, 1),
				history.push(`${location.pathname}?${searchParams.toString()}`)
			);
		} if (+pageParam >= (maxPages + 1)) {
			return (
				searchParams.set(paginationParamName, maxPages),
				history.push(`${location.pathname}?${searchParams.toString()}`)
			);
		};
	}, [pageParam])

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
				disabled={+pageParam < 2}
			>
				<ChevronLeft />
				<MobileChevronLeft />
				<ButtonText>First</ButtonText>
			</StyledButton>
			<StyledButton
				onClick={onDecrement}
				disabled={+pageParam < 2}
			>
				<ChevronLeft />
				<ButtonText>Previous</ButtonText>
			</StyledButton>
			<TextContainer>
				<RegularText>Page</RegularText>
				<BoldText>{limitedPageParam()}</BoldText>
				<RegularText>of</RegularText>
				<BoldText>{maxPages}</BoldText>
			</TextContainer>
			<StyledButton
				onClick={onIncrement}
				disabled={+pageParam > (maxPages - 1)}
			>
				<ButtonText>Next</ButtonText>
				<Chevron />
			</StyledButton>
			<StyledButton
				onClick={onToLastPage}
				disabled={+pageParam > (maxPages - 1)}
			>
				<ButtonText>Last</ButtonText>
				<Chevron />
				<MobileChevron />
			</StyledButton>
		</Wrapper>
	);
};

export default Pagination;