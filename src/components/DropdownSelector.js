import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class DropdownSelector extends Component {
  render() {
    let { type, value, options, handleSelectedChange } = this.props
    if (value === '') {
      value = 'All'
    }
    return (
      <DropdownButton title={value} onSelect={(evt) => handleSelectedChange(type, evt)}>
        { options.map((option) => {
          return (<Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>)
        })}
      </DropdownButton>
    )
  }
}

export default DropdownSelector;
