import React from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/comment-list';
import CommentForm from '../components/comment-form';

import { mapDispatchToProps, mapStateToProps } from '../connect-functions';

let CommentsApp = (props) => {
    const {
        comments,
        deleteComment,
        addComment,

    } = props;

    return (
        <main className="main">
            <section className="section">
                <h1 className="section__heading">Комментарии</h1>
                <CommentList comments={comments} deleteComment={deleteComment} />
            </section>
            <CommentForm addComment={addComment} />
        </main>
    )
}

CommentsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsApp);

export default CommentsApp;