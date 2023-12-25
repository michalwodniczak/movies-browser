import styled, { css } from 'styled-components'
import { ReactComponent as StarSVG } from '../../assets/icon-star.svg'

export const StarIcon = styled(StarSVG)`
	width: 24px;
	height: 24px;

    ${({ $backdrop }) => $backdrop && css`
        width: 40px;
	    height: 40px;
	`}

    @media (max-width: 767px) {
        width: 16px;
	    height: 16px;
	}
`

export const RatingContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
    gap: 12px;

    ${({ $backdrop }) => $backdrop && css`
        flex-wrap: wrap;
        width: 126px;
	    height: 75px;
        gap: 8px;
	`}

    @media (max-width: 767px) {
		gap: 8px;

        ${({ $backdrop }) => $backdrop && css`
            gap: 2px;
	    `}
	}
`

export const RatingNumber = styled.span`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: ${({theme}) => theme.color.almostBlack};

    ${({ $backdrop }) => $backdrop && css`
        font-size: 30px;
        line-height: 1.3;
        font-weight: 500;
        color: ${({theme}) => theme.color.white};
	`}

    ${({ $mainTile }) => $mainTile && css`
        font-size: 22px;
        line-height: 1.3;
        font-weight: 500;
        color: ${({theme}) => theme.color.black};
	`}

    @media (max-width: 767px) {
        font-size: 13px;
        line-height: 1.3;

        ${({ $backdrop }) => $backdrop && css`
            margin-left: 2px;
            font-size: 14px;
            line-height: 1.3;
            font-weight: 600;
            color: ${({theme}) => theme.color.white};         
	    `}

        ${({ $mainTile }) => $mainTile && css`
            color: ${({theme}) => theme.color.black};
	    `}
	}
`

export const RatingMax = styled.span`
    display: none;
    font-weight: 400;
	line-height: 1.2;
    color: ${({theme}) => theme.color.white};

    ${({ $backdrop }) => $backdrop && css`
        display: block;
        margin-top: 16px;
        font-size: 16px;
    `}

    ${({ $mainTile }) => $mainTile && css`
        display: block;
        margin-top: 9px;
        font-size: 14px;
        color: ${({theme}) => theme.color.black};
    `}
	
    @media (max-width: 767px) {
        ${({ $backdrop }) => $backdrop && css`
            display: block;
            margin-top: 4px;
            font-size: 10px;
	    `}

        ${({ $mainTile }) => $mainTile && css`
        display: none;
        `}
	}    
`

export const RatingVotes = styled.span`
	color: ${({ theme }) => theme.color.darkGray};
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;

    ${({ $backdrop }) => $backdrop && css`
        font-size: 16px;
        line-height: 1.2;
        margin-top: 8px;
        color: ${({theme}) => theme.color.white};
	`}

    ${({$mainTile}) => $mainTile && css`
        margin-top: 9px;
        margin-left: 4px;
        font-size: 14px;
        line-height: 1.2;
        color: ${({theme}) => theme.color.black};
    `}

    @media (max-width: 767px) {
        font-size: 13px;
        line-height: 1.3;

        ${({ $backdrop }) => $backdrop && css`
            font-size: 10px;
            line-height: 1.2;
            margin-top: 4px;
            margin-left: 6px;
            color: ${({theme}) => theme.color.white};
	    `}

        ${({$mainTile}) => $mainTile && css`
        margin: 0px;
        color: ${({ theme }) => theme.color.darkGray};
        `}
	}
`