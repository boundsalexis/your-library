import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        //let { className } = props;
        //this.className = "nav" + className ? " ".concat(className) : "";
    }

    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <div className="nav-brand">Google Books</div>
                </li>
                <li className="nav-item">
                    <Link to="/"><a className="nav-link" href="#">Search</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved"><a className="nav-link" href="#">Saved</a></Link>
                </li>
            </ul>
            //<div className={this.className}>{this.props.children}</div>
        );
    }
}

export default Nav;