import React, { useRef } from 'react';
import API from "../utils/API"
import { SET_SEARCH_RESULTS } from '../utils/actions';
import { useStoreContext } from "../utils/GlobalState";

function BookSearch() {
    const [state, dispatch] = useStoreContext();

    const inputRef = useRef();

    function search(e) {
        e.preventDefault();
        API.getGoogleBooks(inputRef.current.value).then(res => {
            console.log("SEARCHING", inputRef.current.value);
            console.log(res.data.items);
            var books = res.data.items.map(book => {
                return ({
                    authors: book.volumeInfo.authors.join(" "),
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.previewLink,
                    title: book.volumeInfo.title,
                    date: book.volumeInfo.publishedDate
                });
            });
            dispatch({
                type: SET_SEARCH_RESULTS,
                searchResults: books
            });
            console.log("SAVING RESULTS");
            console.log(books);
        });
      
    }
    return (

        <form className="container">
            <div className="form-group">
                <label>Enter book</label>
                <input ref={inputRef} className="form-control" aria-describedby="emailHelp" placeholder="Enter Book" />
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => search(e)}>Submit</button>
        </form>


    );


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