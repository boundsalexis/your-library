import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div>
                <h2>Results:</h2>
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