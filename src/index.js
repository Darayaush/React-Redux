import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentsApp from './containers/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import comments from './reducers/comments';

const MyContext = React.createContext();

let initialState = {
    comments: checkLocaleString()
}

function checkLocaleString() {
    let savedStore = localStorage.getItem('comments');
    return (savedStore ? JSON.parse(savedStore) : []);
}

const store = createStore(comments, initialState);

ReactDOM.render(
    <Provider store={store}>
        <CommentsApp />
    </Provider>,
    document.querySelector('.root')
);