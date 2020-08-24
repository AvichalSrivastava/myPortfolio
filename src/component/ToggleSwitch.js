import React, { Component } from "react";
import PropTypes from "prop-types";
import './Toggle.scss';
import App from '../App';
import {modeChange} from '../action';
import {connect} from 'react-redux';

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange're optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

class ToggleSwitch extends Component {

  state = {
    checked: this.props.defaultChecked
  };
  onChange = e => {
    this.setState({
      checked: e.target.checked
    });
    if (typeof this.props.onChange === "function") this.props.onChange();
    if(e.target.checked)
    {
      console.log("Dark Mode");
      this.props.modeChange('bodyDark');
    }else
    {
      console.log("Normal Mode");
      this.props.modeChange('bodyLight');

    }
  };
  render() {
    return (
      <div
        className={"toggle-switch" + (this.props.Small ? " small-switch" : "")}
      >
        <input
          type="checkbox"
          name={this.props.Name}
          className="toggle-switch-checkbox"
          id={this.props.id}
          checked={this.props.currentValue}
          defaultChecked={this.props.defaultChecked}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        {this.props.id ? (
          <label className="toggle-switch-label" htmlFor={this.props.id}>
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={this.props.Text[0]}
              data-no={this.props.Text[1]}
            />
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </div>
    );
  }
  // Set text for rendering.
  static defaultProps = {
    Text: ["Yes", "No"]
  };
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  Name: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  Small: PropTypes.bool,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

const mapStateToProps = state =>
{
  const {mode}= state.Mode;
  return({
    mode
  });
};
export default connect(mapStateToProps,{modeChange})(ToggleSwitch);