import styled from "styled-components";

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