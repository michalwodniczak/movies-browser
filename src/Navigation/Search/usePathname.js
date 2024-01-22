import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setPath } from '../../features/SearchPage/searchSlice';

export const usePathname = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const updatePath = () => {
            switch (path) {
        case "movies":
            return dispatch(setPath("movies"));
        case "people":
            return dispatch(setPath("people"));
        default:
            return dispatch(setPath(""));
    };
    }

return updatePath;
};