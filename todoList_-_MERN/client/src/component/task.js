import  React, { Component } from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:8000/task';

class Task extends Component {
    handleDelete = (id) => {
        axios.post(baseURL + '/' + id)
            .then(function (response) {
                // handle success
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.error('Deleted Task Post Request Error: ', error);
            })
            .then(function () {
                // always executed
           });
    };

    render() {
        const props = this.props;

        return (
            <div id={props._id} className={props.status} key={props._id}>
                {props.task}

                <button id={'remove'} onClick={() => this.handleDelete(props._id)}>
                    X
                </button>
            </div>
        );
    }
}
export {
    Task,
}
