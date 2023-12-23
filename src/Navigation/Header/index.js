import { toMovieList, toPeopleList } from "../../routes";
import { StyledHeader, Logo, Title, StyledList, StyledNavLink } from "./styled";
export const Header = () => (
    <StyledHeader>
        <Logo />
        <Title>Movies Browser</Title>
        <nav>
            <StyledList>
                <li><StyledNavLink to={toMovieList()}>Movies</StyledNavLink></li>
                <li><StyledNavLink to={toPeopleList()}>People</StyledNavLink></li>
            </StyledList>
        </nav>
    </StyledHeader >
);