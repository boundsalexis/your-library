import React, { Component } from 'react';

/**
 * @param{Object}
 *  {
 *      _id:    Number,
 *      title:  String,
 *      author: String,
 *      picture:   String,
 *      description: String,
 *      link: String
 *  }
 * @param{function} onDelete(_id)
 */

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
                    <h6 className="card-subtitle">{this.props.result.author}</h6>
                    <div className="d-flex">
                        <img className="img" src={this.props.result.picture} alt="Book"/>
                        <p className="card-text">{this.props.result.description}</p>
                    </div>
                    <a className="btn" href={this.props.result.link} role="button">View</a>
                    <button type="button" className="btn" onClick={() => { return this.props.onDelete(this.props.result._id);}}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Result;