import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLS) ?? [];

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = formData => {
    // { name: "Rosie Simpson", number: "+16516" }
    if (
      this.state.contacts.some(contact => contact.name === formData.name) ||
      this.state.contacts.some(contact => contact.number === formData.number)
    ) {
      alert('Contact with this name is already in your list!');
      return;
    }

    const contact = {
      name: formData.name,
      number: formData.number,
      id: Math.random(),
    };
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  changeFilter = e => {
    console.log(e.target);
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm toAdd={this.addContact} />

        <h2>Contacts</h2>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          toDelete={this.deleteContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}
