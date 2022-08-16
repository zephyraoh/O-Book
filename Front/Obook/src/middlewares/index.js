import axios from 'axios';
import { GET_DATA, setData } from '../actions';



const api = (store) => (next) => async (action) => {

  switch (action.type) {
    case GET_DATA: {
      console.log('in the middleware');
      const { data } = await axios.get('flowers+inauthor:keyes&key=AIzaSyCm9tT-3u51_XjhduEm-zZUFfz-W_O0_Fgs');
      console.log("middleware data ", data)
      store.dispatch(setData(data));
      console.log(data);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default api;