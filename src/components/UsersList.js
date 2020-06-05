import React from 'react'
import { connect } from 'react-redux'
import { startGetUsers } from '../actions/usersAction'
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class UsersList extends React.Component {

    componentDidMount() {
        toast.error('Users List is here!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        if (this.props.users.length == 0) {
            this.props.dispatch(startGetUsers())
        }
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <h1>Listing users - {this.props.users.length} </h1>
                <ul>
                    {this.props.users.map((user) => {
                        return (
                            <List key={user.id} component="nav" aria-label="mailbox folders">
                                <ListItem button>
                                    <Link to={`users/${user.id}`}>
                                        <ListItemText primary={user.name} />
                                    </Link>
                                </ListItem>
                                <Divider />
                            </List>
                        )

                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersList)