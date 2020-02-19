import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <div className="nav-brand">Google Books</div>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className="nav-link">Saved</Link>
                </li>
            </ul>
        );
    }
}

export default Nav;