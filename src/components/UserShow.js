import React from 'react'
import { connect } from 'react-redux'
import { findUser, userPosts } from '../selectors/usersSelector'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function UserShow(props) {
    return (
        <div>
            {
                props.user && (
                    <div>
                        <h2>name - {props.user.name}</h2>
                        <p>email - {props.user.email}</p>

                        <h2>Listing posts - {props.posts.length} </h2>
                        <ul>
                            {props.posts.map(post => {
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
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: findUser(state.users, id),
        posts: userPosts(state.posts, id)
    }
}

export default connect(mapStateToProps)(UserShow)