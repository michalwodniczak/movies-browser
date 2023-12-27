import { Link } from "react-router-dom";
import { toMovieList, toPeopleList } from "../../routes";
import { StyledHeader, Logo, Title, StyledList, StyledNavLink } from "./styled";
export const Header = () => (
    <StyledHeader>
        <Link to="/">
            <Logo />
        </Link>
        <Title>Movies Browser</Title>
        <nav>
            <StyledList>
                <li><StyledNavLink to={toMovieList()}>Movies</StyledNavLink></li>
                <li><StyledNavLink to={toPeopleList()}>People</StyledNavLink></li>
            </StyledList>
        </nav>
    </StyledHeader >
);