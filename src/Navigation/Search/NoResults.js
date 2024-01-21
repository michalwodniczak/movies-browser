import { useSelector } from "react-redux";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { Wrapper } from "./SearchPage/styled";
import { ReactComponent as IconEmpty } from "../../assets/icon-empty.svg";
import { selectInputValue } from "./searchSlice";

export const NoResults = () => {
    const searchQuery = useSelector(selectInputValue);

    return (
        <Main>
            <Section>
                <SectionTitle>Sorry, there are no results for "{searchQuery}"</SectionTitle>
                <Wrapper>
                    <IconEmpty />
                </Wrapper>
            </Section>
        </Main>
    );
};