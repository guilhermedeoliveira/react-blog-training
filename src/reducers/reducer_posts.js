import _ from 'lodash';

 import { FETCH_POSTS } from '../actions';

 export default function(state = {}, action) {

   switch (action.type) {
     case FETCH_POSTS:
        return _.mapKeys(action.paylod.data, 'id');
       break;

     default:
      return state;
   }
 }