import React, { Component } from 'react';

import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import BookSearch from '../components/BookSearch';
import Results from '../components/Results';

class Search extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div>
            <Nav />
            <Jumbotron />
            <BookSearch />
            <Results title={"Search"} results={this.props.results} />
            </div>
        );
    }
}

export default Search;