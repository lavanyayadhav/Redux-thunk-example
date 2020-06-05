const messagesInitialState = [
    { id: 1, body: 'my first message', createdAt: new Date() },
    { id: 2, body: 'my second message', createdAt: new Date() }
]
const messagesReducer = (state = messagesInitialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            return state.concat(action.payload)
        }
        case 'REMOVE_MESSAGE': {
            return state.filter(msg => msg.id != action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default messagesReducer
