import styled from 'styled-components'
import { ReactComponent as VignetteSVG } from '../../../assets/backdrop-vignette.svg'

export const Header = styled.div`
	background-color: ${({ theme }) => theme.color.black};
`

export const Backdrop = styled.div`
	position: relative;
	margin: auto;
	max-width: 1368px;
	aspect-ratio: 2.1622;
	background: ${({ $background }) => `url('${$background}')`};
	background-size: cover;
  	background-repeat: no-repeat;
	background-position: center;

	@media (max-width: 1400px) {
		padding-left: 16px;
        padding-right: 16px;
	}

	@media (max-width: 767px) {
		box-shadow: none;
    }
`

export const Vignette = styled(VignetteSVG)`
	position: absolute;
	width: 100%;
	height: 100%;
`

export const TitleContainer = styled.div`
	position: absolute;
	bottom: 0%;
	z-index: 2;
	margin-bottom: 54px;

	@media (max-width: 767px) {
		margin-bottom: 8px;
    }
`

export const TitlePrimary = styled.h1`
	color: ${({ theme }) => theme.color.white};
	font-size: 64px;
	font-weight: 600;
	line-height: 120%;
	margin: 0 0 24px 0;

	@media (max-width: 767px) {
		font-size: 24px;
		margin: 0 0 4px 0;
    }
`

export const SectionWrapper = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	width: 100%;

	@media (max-width: 767px) {
		gap: 16px;
	}
`