import React from 'react'
import { connect } from 'react-redux'
import { findUser, userPosts, userComments } from '../selectors/usersSelector'
import { startGetComments } from '../actions/commentsAction'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class PostShow extends React.Component {
    componentDidMount() {
        if (this.props.comments.length == 0) {
            this.props.dispatch(startGetComments())
        }
    }

    componentWillUnmount() {
        this.props.comments = []
    }
    render() {

        return (
            <div>
                <h2>name - {this.props.user.name}</h2>
                <p>email - {this.props.user.email}</p>

                <h2>Listing posts - {this.props.posts.length} </h2>
                <ul>
                    {this.props.posts.map(post => {
                        return (
                            <List key={post.id} component="nav" aria-label="mailbox folders">
                                <ListItem button>
                                    <ListItemText primary={post.title} />
                                </ListItem>
                                <Divider />
                            </List>
                        )
                    })}
                </ul>
                <h2>Listing comments - {this.props.comments.length} </h2>
                <ul>
                    {this.props.comments.map(comment => {
                        return (
                            <List key={comment.id} component="nav" aria-label="mailbox folders">
                                <ListItem button>
                                    <ListItemText primary={comment.body} />
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
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: findUser(state.users, id),
        posts: userPosts(state.posts, id),
        comments: userComments(state.comments, id)
    }
}

export default connect(mapStateToProps)(PostShow)