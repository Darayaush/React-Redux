import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps } from '../connect-functions';
import { addComment } from '../actions/index';

import CommentList from '../components/comment-list';
import CommentForm from '../components/comment-form';

class CommentsApp extends React.Component {
    render() {
        console.log(this.props);
        return (
        <main className="main">
            <section className="section">
                <h1 className="section__heading">Комментарии</h1>
                <CommentList />
            </section>
            <CommentForm addComment={this.props.addComment}  />
        </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (name, comment) => dispatch(addComment(name, comment))
    }
}

CommentsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsApp);

export default CommentsApp;