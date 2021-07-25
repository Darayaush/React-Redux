import React from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/comment-list';
import CommentForm from '../components/comment-form';

import { addComment, deleteComment, onChangeInput, clearForm, warnInvalid } from '../actions/index';

let CommentsApp = (props) => {
    const {
        comments,
        form,
        deleteComment,
        addComment,
        onChangeInput,
        clearForm,
        warnInvalid
    } = props;

    return (
        <main className="main">
            <section className="section">
                <h1 className="section__heading">Комментарии</h1>
                <CommentList comments={comments} deleteComment={deleteComment} />
            </section>
            <CommentForm addComment={addComment} onChangeInput={onChangeInput} form={form} clearForm={clearForm} warnInvalid={warnInvalid} />
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        form: state.form
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (name, comment) => dispatch(addComment(name, comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        onChangeInput: (value, input) => dispatch(onChangeInput(value, input)),
        clearForm: () => dispatch(clearForm()),
        warnInvalid: (invalidField) => dispatch(warnInvalid(invalidField)),
    }
}

CommentsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsApp);

export default CommentsApp;