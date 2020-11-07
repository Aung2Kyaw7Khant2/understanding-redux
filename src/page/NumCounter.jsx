import React from "react";
import { connect } from "react-redux";
import { decreaseNum, increaseNum } from "../service/numAction";

class NumCounter extends React.Component {
  render() {
    const { counter, increaseNum, decreaseNum } = this.props;
    return (
      <>
        <div>This is the number : {counter}</div>
        <hr />
        <div>
          <button type="button" onClick={increaseNum}>
            {" "}
            Increase
          </button>
          <button type="button" onClick={decreaseNum}>
            Decrease
          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseNum: () => dispatch(increaseNum()),
    decreaseNum: () => dispatch(decreaseNum()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumCounter);
