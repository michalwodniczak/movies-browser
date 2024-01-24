import { Header } from "./Header";
import { Search } from "./Search";
import { Wrapper, Container } from "./styled";

function Navigation() {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Search />
            </Container>
        </Wrapper>
    )
};

export default Navigation;
