import React from 'react'
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/countAction";
import Button from '@material-ui/core/Button';

function Btn(props) {
    const handleClick = type => {
        const { dispatch } = props;
        switch (type) {
            case 'increment':
                dispatch(increment());
                break;
            case 'decrement':
                dispatch(decrement());
                break;
            case 'reset':
                dispatch(reset());
                break;
        }
    }
    return <Button variant="contained" color="primary" onClick={() => handleClick(props.type)}>{props.text}</Button>
}

export default connect()(Btn)