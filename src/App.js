import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Messages from './components/Messages'
import UsersList from './components/UsersList'
import PostsList from './components/PostsList'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function App(props) {
  return (
    <Router>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/users">List Users</Link>
          <Link color="inherit" to="/messages">Messages</Link>
          <Link color="inherit" to='/postlist'>Posts </Link>
        </Breadcrumbs>
        <Route path="/users" component={UsersList} exact={true} />
        <Route path="/users/:id" component={UserShow} />
        <Route path="/messages" component={Messages} />
        <Route path='/postlist' component={PostsList} />
        <Route path='/posts/:id' component={PostShow} />
      </div>
    </Router>
  )
}

export default App


// import React from 'react';
// import Counter from './components/Counter'
// import { connect } from 'react-redux'
// import Messages from './components/Messages'
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import MessageForm from './components/MessageForm'

// function App(props) {
//   return (
//     <div>
//       {/* <Typography component="div" variant="body1">
//         <Box><Counter /></Box>
//       </Typography> */}
//       <Messages />

//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// }
// export default connect(mapStateToProps)(App)
// //HFYLBA

// //export default App