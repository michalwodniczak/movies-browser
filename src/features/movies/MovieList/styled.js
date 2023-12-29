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

export const Tile = styled.div`
    width: 324px;
    height: 650px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    padding: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`