import React from 'react'
import Btn from './Btn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
class Counter extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.count === 0 && this.props.count < 0) {
            toast.error('Value is going below negative!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    render() {

        return (
            <div>
                <ToastContainer />
                <h2>Counter is {this.props.count < 0 ? <h2 style={{ color: "red" }}>{this.props.count}</h2> : <h2>{this.props.count}</h2>} </h2>
                {this.props.count < 0 && <p style={{ color: "red" }}>The number is going below zero</p>}
                <Btn text="up" type={'increment'} />
                <Btn text="down" type={'decrement'} />
                <Btn text="reset" type={'reset'} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter)