import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  }

  createContact = evt => {
    evt.preventDefault();
    const contact = {
      name: evt.target.childNodes[1].value,
      number: evt.target.childNodes[3].value,
      id: nanoid(),
    };
    this.state.contacts.push(contact);
  };

  render() {
    return (
      <>
      <h2>Phonebook</h2>
      <form onSubmit={this.createContact}>
        <label></label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label></label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <Contacts contacts={this.state.contacts}/>
      </>
    );
  }
}
