import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log("Counters - mounted");
    const { onReset, counters, onIncrement, onDecrement, onDelete } =
      this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(
          (counter) => (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              counter={counter}
            />
          )
          // {/* <h3>Title #{counter.id}</h3> */}
          // {/* </Counter> */}
        )}
      </div>
    );
  }
}

export default Counters;
