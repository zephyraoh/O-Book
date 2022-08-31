import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchUpdates } from '../../../../actions/books';
import Update from './Update';

const UpdatesFeed = () => {
  
  const dispatch = useDispatch();
  const updates = useSelector(state=> state.books.updates);
  console.log(updates);

  useEffect(() => {
      dispatch(fetchUpdates());
  }, []);

  return(
    <div>
        {updates.map((update) => (
            <Update key={update.loanid} {...update}/>
        )
        )}
    </div>
  )
};

export default UpdatesFeed;