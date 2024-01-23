import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePathname } from "./usePathname";
import { Wrapper, Input, Icon } from "./styled";
import { selectInputValue, selectPath, setInputValue } from "./searchSlice";

export const Search = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const updatePath = usePathname();

    const path = useSelector(selectPath);
    const inputValue = useSelector(selectInputValue);

    useEffect(() => {
        updatePath();
    }, [location.pathname])

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

