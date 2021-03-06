const comments = (state = {}, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            let newComment = {
                id: action.id,
                name: action.name,
                comment: action.comment,
                date: action.date
            }

            let savedComments = [];
            let localStore = localStorage.getItem('comments');
            if (localStore) {
                savedComments = JSON.parse(localStore);
            }
            savedComments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(savedComments));

            return [
                ...state,
                newComment
            ]

        case "DELETE_COMMENT":
            let newCommentList = state.filter(comment => {
                return comment.id !== action.id;
            });
            localStorage.setItem('comments', JSON.stringify(newCommentList))
            return newCommentList;

        default:
            return state;
    }
}

export default comments;