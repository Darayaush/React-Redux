import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);


        this.state = {
            name: '',
            comment: '',
            invalidFields: []
        }
    }

    onClick(e) {
        e.preventDefault();
        let invalids = [];
        let name = this.state.name;
        let comment = this.state.comment;

        if (name === '') invalids.push('name');
        if (comment === '') invalids.push('comment');
        
        if (invalids.length === 0) {
            this.props.addComment(name, comment);
            return this.setState({
                name: '',
                comment: '',
                invalidFields: []
            });
        }

        this.setState({ invalidFields: invalids });
    }

    onChangeInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        console.log(this.props);
        return (
            <form className="form">
                <label className="form__label">
                    Имя:
                    <input type="text" className={getClassName(this.state.invalidFields, 'name')} name="name" onChange={this.onChangeInput} value={this.state.name} />
                </label>

                <label className="form__label">
                    Комментарий:
                    <textarea className={getClassName(this.state.invalidFields, 'comment')} name="comment" cols="30" rows="10" onChange={this.onChangeInput} value={this.state.comment} ></textarea>
                </label>
                <button className="form__btn" onClick={this.onClick}>Добавить</button>
            </form>
        )
    }
}

function getClassName(invalidFields, inputType) {
    let classToSet = 'form__input';

    for (let field of invalidFields) {
        if (field === inputType) classToSet += ' error';
    }

    return classToSet;
}

export default CommentForm;


