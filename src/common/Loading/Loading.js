import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerSVG } from "../../assets/icon-spinner.svg";

const rotate = keyframes`   
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export const SpinnerIcon = styled(SpinnerSVG)`
	margin: auto;
    width: 91px;
	height: 91px;
    pointer-events: none;
    animation: ${rotate} infinite 800ms linear;

    @media (max-width: 767px) {
        width: 35px;
	    height: 35px;
	}
`

export const Container = styled.div`
    display: flex;
    position: relative;
    top: 219px;

    @media (max-width: 767px) {
        top: 66px;
	}
`