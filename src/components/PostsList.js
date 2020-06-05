import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postsAction'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner'
class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            currentvalue: 1,
            limit: 10,
            loading: false
        }
    }
    componentDidMount() {

        if (this.props.posts.length == 0) {
            this.setState({ loading: true })
            this.props.dispatch(startGetPosts())
        }
    }
    render() {
        const indexOfLastPost = this.state.currentvalue * this.state.limit;
        const indexOfFirstPost = indexOfLastPost - this.state.limit;
        const paginating = this.props.posts.slice(indexOfFirstPost, indexOfLastPost)
        const pageNumbers = [];
        for (let i = 1; i <= (this.props.posts.length / this.state.limit); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                {this.state.loading ?
                    <h1>Posts Total length - {this.props.posts.length}</h1>
                    <ul>
                        {paginating.map((post) => {
                            return (
                                <li key={post.id}>
                                    <Link to={`/posts/${post.id}`} >
                                        {post.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                {pageNumbers.map(number => {
                        return (
                            <Button size="small" variant="contained" color="primary" href={`/postlist?page=${number}`}
                                key={number}
                                onClick={() => {
                                    this.setState({ currentvalue: number })
                                }}>
                                {number}
                            </Button>
                        )
                    })
                }
                :
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs

                />}


            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)
