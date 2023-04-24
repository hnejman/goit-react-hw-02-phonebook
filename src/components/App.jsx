import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {

  constructor() {
    super();
    this.createContact.bind(this);
    this.state = {
      contacts: [],
      name: '',
      number: '',
      id: '',
    };
  }

  createContact(evt, name, number, id) {
    evt.preventDefault();
    if (
      !this.state.contacts.filter(check => {
        return (
          check.name
            .toLowerCase()
            .includes(name.toLowerCase()) ||
          check.number.includes(number)
        );
      }).length
    ) {
      id = nanoid();
      const contact = {
        name: name,
        number: number,
        id: id,
      };
      this.setState(prev => ({
        contacts: prev.contacts.concat(contact)
      }));
      console.log(this.state.contacts);
    } else {
      alert(name + ' already in contacts');
      return 0;
    }
  }

  deleteItem = e => {
    const contacts = this.state.contacts.filter(el => {
      return el.id !== e.target.parentNode.id;
    });
    this.setState({ contacts });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form
          onSubmit={evt => {
            this.createContact(
              evt,
              this.state.name,
              this.state.number,
              this.state.id
            );
          }}
        >
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={e => {
              e.preventDefault();
              this.state.name = e.target.value;
            }}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <label>Number</label>
          <br />
          <input
            type="tel"
            name="number"
            onChange={e => {
              e.preventDefault();
              this.state.number = e.target.value;
            }}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {
          this.state.contacts.map(ele => {
              <li key={ele.id} id={ele.id}>
                {ele.name + ': ' + ele.number}
              </li>
          })}
        </ul>
        <Contacts createContact={this.createContact} name={this.state.name}
        number={this.state.number} id={this.state.id}/> 
        {/* <Filter contacts={this.state.contacts} deleteItem={this.deleteItem}/> */}
      </>
    );
  }
}
