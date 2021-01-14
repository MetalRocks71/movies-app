import React, { Component } from 'react'
import Comment from "./comment";

export default class movies extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li style={{listStyleType:'none'}}>Movie Title: {this.props.title}</li>
                    <li style={{listStyleType:'none'}}>Release year: {this.props.year}</li>
                    <li style={{listStyleType:'none'}}>Rating: {this.props.rating}<Comment /></li>
                </ul>
            </div>
        )
    }
}
