import axios from 'axios'

export const setComments = (comments) => {
    return { type: 'SET_COMMENTS', payload: comments }
}
// GET_USERS 
export const startGetComments = () => {

    return (dispatch) => {

        axios.get(`http://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                const comments = response.data
                dispatch(setComments(comments))
            })
    }
}