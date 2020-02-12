import React, { Component } from 'react';

class Jumbotron extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        //let { className } = props;
        //this.className = "jumbotron jumbotron-fluid" + className ? " " + className : "";
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container d-flex flex-column text-center">
                    <h1 className="display-4">(React) Google Books Search</h1>
                    <p className="lead">Searh for and Save Books of interest.</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
