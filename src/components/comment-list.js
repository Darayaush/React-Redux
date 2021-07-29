import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../actions/index';

function CommentList() {
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    return (
        <ul>
            {
                comments.map((com) => {
                    return (
                        <li key={com.id}>
                            <article className="article slideInLeft">
                                <h2 className="article__heading">{com.name}</h2>

                                <p className="article__text">{com.comment}</p>

                                <div className="article__time">{com.date}</div>

                                <div className="article__delete delete" aria-label="Удалить комментарий" tabIndex="0" onClick={() => dispatch(deleteComment(com.id))}>
                                    <span className="delete__span span-top"></span>
                                    <span className="delete__span span-bottom"></span>
                                </div>
                            </article>
                        </li>
                    );
                })
            }
        </ul>
        )
}

export default CommentList;
