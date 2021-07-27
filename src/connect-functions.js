import { addComment, deleteComment } from './actions/index';

export const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (name, comment) => dispatch(addComment(name, comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
    }
}