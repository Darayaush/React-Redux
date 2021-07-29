export const addComment = (name, comment) => {
    return {
        type: 'ADD_COMMENT',
        id: parseInt(Math.random() * Math.pow(10, 5)),
        date: new Date().toLocaleString(),
        name,
        comment
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}