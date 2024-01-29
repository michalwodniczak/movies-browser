import { useSelector } from "react-redux";
import {
    selectCurrnetPage,
    selectTotalPages,
} from "../../common/Navigation/Search/searchSlice";
import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { Wrapper } from "./styled";
import { ReactComponent as IconEmpty } from "../../assets/icon-empty.svg";

export const NoResults = ({ searchQuery }) => {
    const currentPage = useSelector(selectCurrnetPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <Main>
            <Section>
                <SectionTitle>
                    {currentPage > totalPages
                        ? `Sorry, there are only ${totalPages} pages with results for "${searchQuery}"`
                        : `Sorry, there are no results for "${searchQuery}"`
                    }
                </SectionTitle>
                <Wrapper>
                    <IconEmpty />
                </Wrapper>
            </Section>
        </Main>
    );
};