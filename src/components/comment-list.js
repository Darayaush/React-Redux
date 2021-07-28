import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../connect-functions';
import { deleteComment } from '../actions/index';


class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        console.log(this.props);
        return (
            <ul>
                {
                    this.props.comments.map((com) => {
                        return (
                            <li key={com.id}>
                                <article className="article slideInLeft">
                                    <h2 className="article__heading">{com.name}</h2>

                                    <p className="article__text">{com.comment}</p>

                                    <div className="article__time">{com.date}</div>

                                    <div className="article__delete delete" aria-label="Удалить комментарий" tabIndex="0" onClick={ev => this.props.deleteComment(com.id)}>
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

CommentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);

export default CommentList;
