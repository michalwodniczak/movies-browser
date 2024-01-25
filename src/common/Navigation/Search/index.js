import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePathname } from "./usePathname";
import { Wrapper, Input, Icon } from "./styled";
import {
    selectInputValue,
    selectPath,
    setInputValue,
    selectCurrnetPage
} from "./searchSlice";
import {
    useURLParameter,
    useUpdatePageFromURL,
    useUpdateQueryFromURL,
    useReplaceQueryParameter
} from "../../../utils/useURLParams";
import paginationParamName from "../../../utils/paginationParamName";
import queryParamName from "../../../utils/queryParamName";

export const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const updatePath = usePathname();

    const path = useSelector(selectPath);
    const inputValue = useSelector(selectInputValue);
    const currentPage = useSelector(selectCurrnetPage);

    const pageParam = useURLParameter(paginationParamName);
    const query = useURLParameter(queryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const updateQueryFromURL = useUpdateQueryFromURL();
    const updatePageFromURL = useUpdatePageFromURL();

    const params = {
        pageKey: paginationParamName,
        pageValue: currentPage,
        queryKey: queryParamName,
        queryValue: inputValue,
    };

    useEffect(() => {
        updatePath();
    }, [location.pathname]);

    useEffect(() => {
        updatePageFromURL({
            key: "search",
            value: +pageParam,
        });
    }, [pageParam]);

    useEffect(() => {
        updateQueryFromURL(query)
    }, [query]);
  
    useEffect(() => {
        replaceQueryParameter(params);
    }, [inputValue, currentPage, query, pageParam]);

    const onInputChange = ({ target }) => {
        const trimmedValue = target.value.trim();

        if (trimmedValue.length !== 0) {
            dispatch(setInputValue(target.value));
        } else dispatch(setInputValue(trimmedValue));
    };

    return (
        <Wrapper>
            <Icon />
            <Input
                placeholder={`Search for ${path}...`}
                onChange={onInputChange}
                value={inputValue || ""}
            />
        </Wrapper>
    );
};

