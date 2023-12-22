import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage, goToFirstPage, selectPageState } from './paginationSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPageState);
    
    return (
	<div>
		<button onClick={()=> dispatch(goToFirstPage())} disabled={currentPage < 2}>First</button>
		<button onClick={()=> dispatch(decrementPage())} disabled={currentPage < 2}>Previous</button>
        {`Page ${currentPage} of ???`}
		<button onClick={()=> dispatch(incrementPage())}>Next</button>
		<button disabled={true}>Last</button>
	</div>
    );
}

export default Pagination;
