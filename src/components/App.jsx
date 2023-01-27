import { Component } from "react";
import { nanoid } from 'nanoid';
import "./App.module.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
		const contacts = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);

		if (parsedContacts) this.setState({ contacts: parsedContacts });
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.contacts !== prevState.contacts) localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	}

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            changeFilterInput={this.changeFilterInput}
          />
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </section>
    );
  }
}
