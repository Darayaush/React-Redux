import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentsApp from './containers/app';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

let initialState = {
    comments: checkLocaleString(),
    form: {
        name: '',
        comment: '',
        invalidFields: []
    }
}

function checkLocaleString() {
    let savedStore = localStorage.getItem('comments');
    return (savedStore ? JSON.parse(savedStore) : []);
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <CommentsApp store={store} />,
    document.querySelector('.root')
);