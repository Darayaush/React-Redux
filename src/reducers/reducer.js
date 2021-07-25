import { combineReducers } from 'redux';

import comments from './comments';
import form from './form';

export default combineReducers({
    comments,
    form
})
