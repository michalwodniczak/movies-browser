import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { usePathname } from "./usePathname";
import { Wrapper, Input, Icon } from "./styled";
import {
    selectPath,
    setInputValue,
} from "./searchSlice";
import {
    useURLParameter,
    useUpdatePageFromURL,
} from "../../../utils/useURLParams";
import paginationParamName from "../../../utils/paginationParamName";
import queryParamName from "../../../utils/queryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const updatePath = usePathname();
    const updatePageFromURL = useUpdatePageFromURL();
    
    const path = useSelector(selectPath);
    const pageParam = useURLParameter(paginationParamName);
    const query = useURLParameter(queryParamName);
    const searchParams = new URLSearchParams(location.search);

    useEffect(() => {
        updatePath();

        if (query) {
            updatePageFromURL({
                key: queryParamName,
                value: +pageParam,
            });
            dispatch(setInputValue(query));
        };
    }, [location]);

    const onInputChange = ({ target }) => {
        const inputQuery = target.value.trim() !== 0 ? target.value : undefined;

        if (!inputQuery) {
            searchParams.delete(queryParamName);
        } else {
            searchParams.set(queryParamName, inputQuery);
            searchParams.set(paginationParamName, "1")
        }

        return history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <Icon />
            <Input
                placeholder={`Search for ${path}...`}
                onChange={onInputChange}
                value={query || ""}
            />
        </Wrapper>
    );
};

