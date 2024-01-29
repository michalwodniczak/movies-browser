import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPath } from "./searchSlice";
import popularMoviesPathName from "../../../utils/popularMoviesPathName";
import popularPeoplePathName from "../../../utils/popularPeoplePathName";

export const usePathname = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const updatePath = () => {
        switch (path) {
            case popularMoviesPathName:
                return dispatch(setPath(popularMoviesPathName));
            case popularPeoplePathName:
                return dispatch(setPath(popularPeoplePathName));
            default:
                return dispatch(setPath(""));
        };
    };

    return updatePath;
};