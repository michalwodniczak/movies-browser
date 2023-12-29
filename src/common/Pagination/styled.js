import styled from 'styled-components';
import { ReactComponent as ChevronSVG } from '../../assets/icon-chevron.svg';

export const Wrapper = styled.div`
	font-family: 'Poppins';
    font-size: 14px;
	margin-top: 56px;
	display: flex;
	justify-content: center;
	gap: 12px;

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
	color: #7e839a;
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
    color: #18181b;
	font-weight: 600;
`

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px 16px;
	border: none;
	border-radius: 5px;
	color: #0044cc;
	background-color: #d6e4ff;

	@media (max-width: 767px) {
		padding: 8px 12px;
		gap: 4px;
	}

	&:disabled {
		color: #7e839a;
		background-color: #e4e6f0;
	}
`

export const ButtonText = styled.span`
	color: #18181b;

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
