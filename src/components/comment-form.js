import React from 'react';

const CommentForm = ({ form, onChangeInput, addComment, clearForm, warnInvalid }) => {
    return (
        <form className="form">
            <label className="form__label">
                Имя:
                <input type="text" className={getClassName(form, 'name')} name="name" onChange={ev => onChangeInput(ev.target.value, 'name')} value={form.name} />
            </label>

            <label className="form__label">
                Комментарий:
                <textarea className={getClassName(form, 'comment')} name="comment" cols="30" rows="10" onChange={ev => onChangeInput(ev.target.value, 'comment')} value={form.comment} ></textarea>
            </label>
            <button className="form__btn" onClick={ev => onClick(ev, addComment, form, clearForm, warnInvalid)}>Добавить</button>
        </form>
    )
}

function onClick(e, addComment, form, clearForm, warnInvalid) {
    e.preventDefault();

    let invalidFields = checkValidation(form);

    if (invalidFields.length !== 0) {
        warnInvalid(invalidFields);
        return;
    }

    addComment(form.name, form.comment);
    clearForm();
}

function checkValidation(form) {
    let formKeys = Object.keys(form);
    let invalidFields = [];

    for (let key of formKeys) {
        if (form[key] === '') invalidFields.push(key);
    }

    return invalidFields;
}


function getClassName(form, inputType) {
    let classToSet = 'form__input';

    for (let field of form.invalidFields) {
        if (field === inputType) classToSet += ' error';
    }

    return classToSet;
}

export default CommentForm;
