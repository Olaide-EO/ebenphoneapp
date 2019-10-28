import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title
             text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h3>page not found</h3>
              <h3>the requested URL<span className="text-danger">
              {this.props.location.pathname}
              </span>{" "}
              was not found</h3>
             </div>
            </div>

            </div>
        )
    }
}
