import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // componentDidUpdate(prevPops, prevState) {
  //   console.log("prevPops", prevPops);
  //   console.log("prevState", prevState);
  //   if (prevPops.counter.value !== this.props.counter.value) {
  //     // AJAX call and get new data from the server
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("Counter - unmounted");
  // }

  render() {
    // console.log("Counter - rendered ");
    return (
      <div className="row">
        {/* {this.props.children} */}
        {/* {this.props.counter.id}
         */}

        <div className="col-1">
          <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
            +
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
}

export default Counter;
