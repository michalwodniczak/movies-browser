import styled from 'styled-components';
import { ReactComponent as ChevronSVG } from '../../assets/icon-chevron.svg';

export const Wrapper = styled.div`
    margin-top: 56px;
	display: flex;
	justify-content: center;
	gap: 12px;
	font-size: 14px;

	@media (max-width: 767px) {
		gap: 8px;
	}
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 12px;

    @media (max-width: 767px) {
		gap: 2px;
        margin: 0;
	}
`

export const RegularText = styled.span`
	color: ${({ theme }) => theme.color.darkGray};
	font-size: 16px;
	font-weight: 400;
	line-height: 150%;

    @media (max-width: 767px) {
		gap: 2px;
        font-size: 10px;
	    line-height: 24px;
	}
`

export const BoldText = styled(RegularText)`
    color: ${({ theme }) => theme.color.almostBlack};
	font-weight: 600;
`

export const StyledButton = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px 16px;
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.color.blue};
	background-color: ${({ theme }) => theme.color.lightBlue};

	@media (max-width: 767px) {
		padding: 8px 12px;
		gap: 4px;
	}

	&:disabled {
		cursor: auto;
		color: ${({ theme }) => theme.color.darkGray};
		background-color: ${({ theme }) => theme.color.gray};
	}
`

export const ButtonText = styled.span`
	color: ${({ theme }) => theme.color.almostBalck};

	@media (max-width: 767px) {
		display: none;
	}
`

export const Chevron = styled(ChevronSVG)`
	scale: 1.4;

	@media (max-width: 767px) {
		scale: 1;
	}
`

export const ChevronLeft = styled(ChevronSVG)`
	scale: 1.4;
	transform: rotate(180deg);

	@media (max-width: 767px) {
		scale: 1;
	}
`

export const MobileChevron = styled(Chevron)`
	@media (min-width: 768px) {
		display: none;
	}
`

export const MobileChevronLeft = styled(ChevronLeft)`
	@media (min-width: 768px) {
		display: none;
	}
`