// import React from 'react'
// import { connect } from 'react-redux'
// import { startGetComments } from '../actions/commentsAction'

// class Comments extends React.Component {
//     componentDidMount() {
//         if (this.props.comments.length == 0) {
//             this.props.dispatch(startGetComments())
//         }
//     }

//     // componentWillUnmount() {
//     //     props.comments : []
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>Comments length - {this.props.comments.length} </h1>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     comments: state.comments
// }

// export default connect(mapStateToProps)(Comments)