import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper, Input, Icon } from "./styled";
import { fetchData, selectInputValue, selectPath, setInputValue, setPath } from "./searchSlice";

export const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const path = useSelector(selectPath);
    const inputValue = useSelector(selectInputValue);
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    useEffect(() => {
        if (!query) {
            history.push(`${location.pathname}`);
        }
    }, [query]);

    useEffect(() => {
        history.push(`${location.pathname}?search=${inputValue}`);
    }, [inputValue]);

    const onInputChange = ({ target }) => {
        const inputValue = target.value
        dispatch(setInputValue(inputValue));
        dispatch(fetchData({ query: inputValue }));

        if (inputValue === "") {
            dispatch(fetchData());
        }
    };

    useEffect(() => {
        const path = location.pathname;

        switch (path) {
            case "/":
            case "/movies":
                dispatch(setPath("movies"));
                break;

            case "/people":
                dispatch(setPath("people"));
                break;
            default:
        };
    }, [location.pathname, dispatch]);

    return (
        <Wrapper>
            <Icon />
            <Input
                placeholder={`Search for ${path}...`}
                onChange={onInputChange}
                value={inputValue}
            />
        </Wrapper>
    );
};
