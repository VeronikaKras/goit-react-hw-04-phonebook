import React, { Component } from 'react';

export default class ContactForm extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    this.props.toAdd({ name, number });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name:
            <input type="text" required name="name" />
          </label>
          <label>
            Number:
            <input type="text" required name="number" />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
