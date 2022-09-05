import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchUpdates } from '../../../../actions/books';
import Update from './Update';
import Loading from '../../../GlobalComponents/Loading';

const UpdatesFeed = () => {
  
  const dispatch = useDispatch();
  const updates = useSelector(state=> state.books.updates);
  console.log(updates);
  const loading = useSelector(state=> state.books.loading);

  useEffect(() => {
      dispatch(fetchUpdates());
  }, []);

  if(loading){
    return <Loading/>
  }
  return(
    <div>
      <p className="mobile:text-lg desktop:text-3xl">Les derniers prêts</p>
        {updates.map((update) => (
            <Update key={update.loanid} {...update}/>
        )
        )}
    </div>
  )
};

export default UpdatesFeed;