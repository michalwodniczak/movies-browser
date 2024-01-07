import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper, Input, Icon } from "./styled";
import { fetchData, selectPath,setPath} from "./searchSlice";

export const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const path = useSelector(selectPath);
    const [query, setQuery] = useState("");

    const onInputChange = ({ target }) => {
        setQuery(target.value);
        dispatch(fetchData({ query: target.value }));
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
                value={query}
            />
        </Wrapper>
    );
};

