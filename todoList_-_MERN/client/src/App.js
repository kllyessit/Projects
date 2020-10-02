import  React, { Component } from 'react';
import './style/index.css';
import { STATUS } from './constants/constants';
import { List } from './component/list';
const axios = require('axios');
const baseURL = 'http://localhost:8000/task';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            postVal: '',
            data: [],
        };

        this.prependNewData = this.prependNewData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({postVal: event.target.value});
    }

    prependNewData(event) {
        let inputValue = this.state.postVal;

        if (inputValue === '' ) {
            alert('Please add a task')
        } else {
            const newDataObj = {
                task: inputValue,
                status: STATUS.PENDING
            };
            this.setState(prevState => ({
                data: [newDataObj, ...prevState.data, ],
        }));
            axios.post(baseURL, newDataObj)
                .then((res) => console.log(res))
                .catch(function(err) {
                    console.error(err)
                });
        }
        event.preventDefault();
    }
    componentDidMount() {
        axios.get(baseURL)
            .then(function (response) {
                // Debug
                // console.log(response.data);
                // handle success
                this.setState({data:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <header> MERN - Todo List </header>
                <section>
                    <h1>WORK TO-DOS</h1>
                    <p>Press 'Enter' to submit</p>
                    <p>Click 'X' to remove task</p>

                    <form onSubmit={this.prependNewData}>
                        <input type="text" onChange={this.handleChange}/>
                    </form>
                </section>
                <List data={this.state.data}/>
            </div>
        )
    }
}

export default App;
