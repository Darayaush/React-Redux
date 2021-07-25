import React from 'react';

const CommentList = ({ comments, deleteComment }) => {
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

                                <div className="article__delete delete" aria-label="Удалить комментарий" tabIndex="0" onClick={ev => deleteComment(com.id)}>
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

// 