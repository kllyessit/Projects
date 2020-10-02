import React, { Component } from "react";
import { Task } from './task';

class List extends Component {
    render() {
        let props = this.props;

        return (
            <div>
                <article className="list" key="task">
                    {props.data.map(task => <Task key={task._id} {...task}/>)}
                </article>
            </div>
        );
    }
}

export {
    List
}
