import React, { Component } from 'react';

import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';

class Saved extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div>
            <Nav />
            <Jumbotron />
            <Results title={"Saved"} results={this.props.results} />
            </div>
        );
    }
}

export default Saved;