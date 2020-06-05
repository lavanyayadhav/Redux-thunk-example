import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import { removeMessage } from '../actions/messagesAction'
class MessageItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: props.body,
            editMode: false,
            hover: false
        }
    }

    handleOver = () => {
        this.setState({
            hover: true
        })
    }

    handleOut = () => {
        this.setState({
            hover: false
        })
    }
    handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure?")
        if (confirmRemove) {
            console.log(this.props.id)
            axios.delete(`http://localhost:3033/messages/${this.props.id}`)
                .then((response) => {
                    console.log(response.data)
                    const message = response.data

                    this.props.dispatch(removeMessage(message.id))
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    }

    render() {
        return (
            <div>

                {
                    this.state.editMode ? (
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChange}
                                name="body"
                            />
                        </form>
                    ) : <p> {this.props.body} </p>
                }
                <small onMouseOver={this.handleOver} onMouseOut={this.handleOut} >
                    {
                        this.state.hover ? moment(this.props.createdAt).format('dddd MMMM Do YYYY, h:mm:ss a') : moment(this.props.createdAt).fromNow()
                    }
                </small><br></br>
                <button onClick={this.handleRemove}> remove </button>
                <hr />

            </div>
        )
    }
}

MessageItem.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
    createdAt: PropTypes.object.isRequired,
    removeMessage: PropTypes.func.isRequired,
    updateMessage: PropTypes.func.isRequired
}

export default connect()(MessageItem)