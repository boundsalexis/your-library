import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="container">
                <h3>{this.props.title}</h3>
                <div>
                    {
                        this.props.results.map((result, index) => {
                            return <Result key={index} result={result} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Results;