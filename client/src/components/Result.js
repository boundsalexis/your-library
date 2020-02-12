import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.result.title}</h4>
                    <h5 className="card-subtitle">{this.props.result.subtitle}</h5>
                    <h6 className="card-subtitle text-muted">{this.props.result.author}</h6>
                    <div className="d-flex">
                        <img className="img" src={this.props.result.img}/>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;