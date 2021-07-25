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

export const onChangeInput = (value, input) => {
    return {
        type: 'SET_INPUT',
        value,
        input
    }
}

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
    }
}

export const warnInvalid = (invalidFields) => {
    return {
        type: 'WARN_INVALID',
        invalidFields
    }
}