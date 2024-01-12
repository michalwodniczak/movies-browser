import styled from 'styled-components'

export const Main = styled.main`
	max-width: 1368px;
  margin: auto;
  padding-bottom: 103px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 16px;
	}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`