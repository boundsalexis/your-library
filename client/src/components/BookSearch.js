import React, { Component } from 'react';

/**
 * BookSearch
 */
class BookSearch extends Component {
    constructor(props) {
        super(props);

        this.state = { query: "" };
        this.props = props;
    
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSubmitQuery = this.onSubmitQuery.bind(this);
    }

    onChangeQuery(event) {
        this.setState({ ...this.state, query: event.target.value })
    }

    onSubmitQuery(event) {
        console.log("onSubmitQuery");
    }

    render() {
        return (
            <form className="container" onSubmit={this.onSubmitQuery}>
                <div className="form-group">
                    <h2>
                        <label htmlFor="query">Book Search</label>
                    </h2>
                    <h5>
                        <label htmlFor="query">Book</label>
                    </h5>
                    <input type="text" className="form-control" id="query" placeholder="Enter Book" onChange={this.onChangeQuery} value={this.state.query}/>
                </div>
            </form>
        );
    }
}

export default BookSearch;