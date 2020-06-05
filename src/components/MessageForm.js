import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions/messagesAction'

class MessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            body: this.state.body,
            createdAt: new Date()
        }
        this.props.dispatch(addMessage(formData))
    }

    render() {
        return (
            <div>
                <h2>Add Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.body}
                        onChange={this.handleChange}
                        name="body"
                    />
                </form>
            </div>
        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default connect()(MessageForm)