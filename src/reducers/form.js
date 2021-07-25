const form = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INPUT':
            let stateForm = { [action.input]: action.value };
            return Object.assign({}, state, stateForm);

        case 'CLEAR_FORM':
            return { name: '', comment: '', invalidFields: [] };

        case 'WARN_INVALID':
            return Object.assign({}, state, { invalidFields: action.invalidFields })

        default:
            return state;
    }
}
export default form;